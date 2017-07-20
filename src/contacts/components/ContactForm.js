import React from 'react';

var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },

  onNameInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}))
  },

  onEmailInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}))
  },

  onDescriptionInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}))
  },

  onSubmit: function(e) {
    e.preventDefault()
    this.props.onSubmit()
  },

  render: function() {
    var errors = this.props.value.errors || {}
    return (
      <form
          onSubmit={this.onSubmit}
          className="ContactForm"
          noValidate="true">
        <input
          type="text"
          className={errors.name && 'ContactForm-error'}
          placeholder="Name (required)"
          onChange={this.onNameInput}
          value={this.props.value.name}
          ref="name"></input>
        <input
          type="email"
          className={errors.email && 'ContactForm-error'}
          placeholder="Email (required)"
          onChange={this.onEmailInput}
          value={this.props.value.email}
          noValidate="true"></input>
        <textarea
          placeholder="Description"
          onChange={this.onDescriptionInput}
          value={this.props.value.description}></textarea>
        <button
          type="submit">Save</button>
      </form>
    )
  },
});

export default ContactForm;
