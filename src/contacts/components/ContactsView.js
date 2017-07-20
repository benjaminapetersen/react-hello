import React from 'react';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';


var ContactsView = React.createClass({
  propTypes: {
    onChangeContact: React.PropTypes.func.isRequired,
    onSubmitContact: React.PropTypes.func.isRequired,

    contacts: React.PropTypes.array.isRequired,
    newContactForm: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className="ContactsView">
        <h1 className="ContactsView-title">Contacts</h1>
        <ul className="ContactsView-list">
          {this.props.contacts.map((contact, index) => {
            return <ContactItem {...Object.assign({}, contact, {id: contact.key})}></ContactItem>
          })}
        </ul>
        <ContactForm
          value={this.props.newContactForm}
          onChange={this.props.onChangeContact}
          onSubmit={this.props.onSubmitContact}></ContactForm>
      </div>
    );
  },
});


export default ContactsView;
