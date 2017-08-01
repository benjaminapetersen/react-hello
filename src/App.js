import React, { Component } from 'react';

import { Route, Link, Redirect, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './main/components/Header';
import Footer from './main/components/Footer';

import IndexPage from './main/components/IndexPage';
import SettingsPage from './main/components/SettingsPage';
import DashboardPage from './main/components/DashboardPage';
import DashboardFooPage from './main/components/DashboardFooPage';
import FooPage from './main/components/FooPage';

import ContactsPage from './contacts/ContactsPage';

class App extends Component {

  constructor() {
    super();
    // STATE/DATA OWNER
    //
    // state should only be used for internal values
    // that affect this component ONLY and nothing else.
    // be careful about giving components state.
    this.state = {
      title: 'Welcome'
    }
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (

      <div className="App">

        <Header
          logo={logo}
          title={this.state.title}
          changeTitle={this.changeTitle.bind(this)} />

        <div>
          <nav className="App-nav">
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboard/foo">Dashboard Foo</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/contacts">Contacts</Link>
          </nav>

          <Switch>
            <Route path="/" exact component={IndexPage}/>
            <Route path="/contacts" component={ContactsPage}/>
            <Route path="/settings" component={SettingsPage}/>
            <Route path="/dashboard" component={DashboardPage}>
              <Route path="/foo" component={DashboardFooPage}/>
            </Route>
            <Route path="/foo" exact component={FooPage}/>
          </Switch>

        </div>
        <p className="App-intro">
          Stuff and things.
        </p>

        <Footer />

    </div>
    );
  }
}

export default App;
