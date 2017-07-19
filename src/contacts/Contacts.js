// resource for learning "vanilla" react:
// - http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/
// - https://github.com/jamesknelson/raw-react-part-3/
// following this, began to update it to use the standard tools,
//  including imports, jsx, etc.
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/contacts.css';

import './vendor/polyfills';

import './state'; // cuz not sure where this should go atm
import './actions/contact';
import navigated from './actions/navigation';
import Application from './components/Application';


// Handle browser navigation events
window.addEventListener('hashchange', navigated, false);

// Set the initial route and render the app
navigated();
