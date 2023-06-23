import React from 'react';
// import PropTypes from 'prop-types'
import css from './ContactListItem.module.css';

const ContactListItem = ({ name, number }) => {
  return (
    <li className={css.listItem}>
      {name}: {number}
    </li>
  );
};

// ContactListItem.propTypes = {}

export default ContactListItem;
