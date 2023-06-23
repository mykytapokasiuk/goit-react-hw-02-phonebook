import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm.js';
import Filter from './Filter/Filter.js';
import ContactList from './ContactList/ContactList.js';

export default class App extends Component {
  state = {
    contacts: [],
    filter: [],
  };

  onAddContact = (data, name) => {
    const isExist = this.state.contacts.some(item => item.name === name);
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, data],
    });
  };

  onFilterContacts = name => {
    this.setState({
      filter: this.state.contacts.filter(item =>
        item.name.toLowerCase().includes(name)
      ),
    });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter onFilterContacts={this.onFilterContacts} />
        <ContactList contacts={this.state.filter} />
      </div>
    );
  }
}
