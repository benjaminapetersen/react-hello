import React from 'react';
import ContactView from './ContactView';
import ContactsView from './ContactsView';
import {
  updateContactForm, submitContactForm, submitNewContact, updateNewContact
} from '../actions/contact';

export const Application = React.createClass({
  propTypes: {
    location: React.PropTypes.array.isRequired,
  },

  render: function() {
    switch (this.props.location[0]) {
      case 'contacts':
        if (this.props.location[1]) {
          return React.createElement(ContactView, Object.assign({}, this.props, {
            id: this.props.location[1],
            onChangeContact: updateContactForm,
            onSubmitContact: submitContactForm,
          }))
        }
        else {
          return React.createElement(ContactsView, Object.assign({}, this.props, {
            onChangeContact: updateNewContact,
            onSubmitContact: submitNewContact,
          }));
        }
        break;

      default:
        return React.createElement('div', {},
          React.createElement('h1', {}, "Not Found"),
          React.createElement('a', {href: '#/contacts'}, "Contacts")
        );
    }
  },
});

export default Application; // i guess this is syntax, duplication?
