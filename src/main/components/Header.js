import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
    setTimeout(() => {
      this.props.changeTitle('Wheeee');
    }, 400);
  }

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={this.props.logo} className="App-logo" alt="logo" />
          <h2>{this.props.title}</h2>
        </header>
        <div>
          <input
            value={this.props.title}
            onChange={this.handleChange.bind(this)} />
        </div>
      </div>
    )
  }
}
