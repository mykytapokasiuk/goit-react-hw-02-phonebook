import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const Filter = ({ value, onChangeFilter }) => {
  const filterNameId = nanoid();
  return (
    <div>
      <div className="filter">
        <label htmlFor={filterNameId}>Find contacts by name</label>
        <input
          type="text"
          value={value}
          name="name"
          id={filterNameId}
          onChange={onChangeFilter}
          required
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
