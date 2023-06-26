import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem.js';
import css from './ContactList.module.css';

const ContactList = ({ filteredContacts, onRemoveContact }) => {
  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            contactId={contact.id}
            onRemoveContact={onRemoveContact}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
