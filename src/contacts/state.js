import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';

// NOTE: i'm sure this is incorrect, just dropping it here for now to get things
// wire back up.  This tutorial did not use all the fancy latest greatest
// tools, it was focused on being as vanilla as possible.
// updating & messing around for the learning experience.
// Constants
export var CONTACT_TEMPLATE = {
  name: "",
  email: "",
  description: "",
  errors: null,
};

// Initial state
export var state = {
  transitioning: false,
  location: null,
  contacts: [
    {key: '1', name: 'Conroy Cage', email: 'conroy.cage@gmail.com', description: '' },
    {key: '2', name: 'Cletus Boggs', email: 'cletus.boggs@gmail.com', description: '' },
    {key: '3', name: 'Elijah Duran', email: 'elijah.durangmail.com', description: '' },
    {key: '4', name: 'Emma Jean Faye', email: 'emma.jean.faye@gmail.com', description: '' },
    {key: '5', name: 'Jethro Jacobs', email: 'jethro.jacobs@gmail.com', description: '' },
    {key: '6', name: 'Ginger Melody', email: 'ginger.melody@gmail.com', description: '' },
    {key: '7', name: 'Silas Filas', email: 'silas.filas@gmail.com', description: '' },
    {key: '8', name: 'Shizzle McDrizzle', email: 'schizzle.mcdrizzle@gmail.com', description: '' },
  ],
  contactForms: {},
  newContactForm: Object.assign({}, CONTACT_TEMPLATE),
};

// Make the given changes to the state and perform any required housekeeping
export function setState(changes) {
  Object.assign(state, changes);
  if (!state.transitioning) {
    ReactDOM.render(
      // is there an easy way to pass an object of properties?
      <Application {...state}/>,
      document.getElementById('react-app'));
  }
}
