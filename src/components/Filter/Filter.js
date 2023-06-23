// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Filter extends Component {
  filterNameId = nanoid();
  // static propTypes = { second: third };

  state = {
    name: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      name: value.toLowerCase().trim(),
    });
    this.props.onFilterContacts(value);
    console.log(value);
  };
  render() {
    return (
      <div>
        <div className="filter">
          <label htmlFor={this.filterNameId}>Find contacts by name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            id={this.filterNameId}
            onChange={this.handleChange}
            required
          />
        </div>
      </div>
    );
  }
}
