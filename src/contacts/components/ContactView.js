import React from 'react';
import NotFoundView from './NotFoundView';
import ContactForm from './ContactForm';

var ContactView = React.createClass({
  propTypes: {
    onChangeContact: React.PropTypes.func.isRequired,
    onSubmitContact: React.PropTypes.func.isRequired,

    contacts: React.PropTypes.array.isRequired,
    contactForms: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired,
  },

  // an alt
  renderContactView: function(contactForm) {
    return (
      <div className="ContactView">
        <h1 className="ContactView-title">Edit Contact</h1>
        <ContactForm {...{
            value: contactForm,
            onChange: this.props.onChangeContact,
            onSubmit: this.props.onSubmitContact,
          }}></ContactForm>
      </div>
    );
  },

  render: function() {
    var key = this.props.id;
    var contactForm =
      this.props.contactForms[key] ||
      this.props.contacts.filter(function(contact) { return contact.key == key })[0];
    // prefer the condional within the render itself, however.
    // https://facebook.github.io/react/docs/conditional-rendering.html
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    return (
      !contactForm ? (<NotFoundView />) : this.renderContactView(contactForm)
    );
  },
});


export default ContactView;
