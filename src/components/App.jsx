import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm.js';
import Filter from './Filter/Filter.js';
import ContactList from './ContactList/ContactList.js';
import css from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
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

  onChangeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  onRemoveContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };
  render() {
    const { contacts, filter } = this.state,
      filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    return (
      <div className={css.app}>
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.onAddContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.onChangeFilter} />
          {contacts.length === 0 ? (
            <p className={css.contactsEmptyText}>The contact list is empty</p>
          ) : (
            <ContactList
              filteredContacts={filteredContacts}
              onRemoveContact={this.onRemoveContact}
            />
          )}
        </div>
      </div>
    );
  }
}
