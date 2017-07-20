import React from 'react';

var ContactItem = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },

  render: function() {
    return (
      <div className="ContactItem">
        <a href={'#/contacts/'+this.props.id} className="ContactItem-name">{this.props.name}</a>
        <div className="ContactItem-email">{this.props.email}</div>
        <div className="ContactItem-description">{this.props.description}</div>
      </div>
    );
  },
});


export default ContactItem;
