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
