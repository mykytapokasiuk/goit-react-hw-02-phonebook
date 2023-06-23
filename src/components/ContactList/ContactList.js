import React from 'react';
// import PropTypes from 'prop-types'
import ContactListItem from '../ContactListItem/ContactListItem.js';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {}

export default ContactList;
