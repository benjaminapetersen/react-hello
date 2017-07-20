import React from 'react';
import ContactView from './ContactView';
import ContactsView from './ContactsView';
import {
  updateContactForm, submitContactForm, submitNewContact, updateNewContact
} from '../actions/contact';

export const Application = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    location: React.PropTypes.array.isRequired,
  },

  render: function() {
    var attribs = {};
    switch (this.props.location[0]) {
      case 'contacts':
        if (this.props.location[1]) {
          return (
            <ContactView {...Object.assign(attribs, this.props, {
              id: this.props.location[1],
              onChangeContact: updateContactForm,
              onSubmitContact: submitContactForm,
            })}></ContactView>
          );
        }
        else {
          return (
            <ContactsView {...Object.assign(attribs, this.props, {
              onChangeContact: updateNewContact,
              onSubmitContact: submitNewContact,
            })}></ContactsView>
          )
        }
        break;
      default:
        // note: didn't we create a 'not found' component for this?
        return (
          <div>
            <h1>Not Found</h1>
            <a href="#/contacts">Contacts</a>
          </div>
        )
    }
  },
});

export default Application; // i guess this is syntax, duplication?
