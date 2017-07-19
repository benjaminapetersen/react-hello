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
    {key: '1', name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
    {key: '2', name: "Jim", email: "jim@example.com"},
  ],
  contactForms: {},
  newContactForm: Object.assign({}, CONTACT_TEMPLATE),
};

// Make the given changes to the state and perform any required housekeeping
export function setState(changes) {
  Object.assign(state, changes);

  if (!state.transitioning) {
    ReactDOM.render(
      React.createElement(Application, state),
      document.getElementById('react-app')
    );
  }
}
