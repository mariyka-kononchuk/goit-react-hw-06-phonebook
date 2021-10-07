import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action'
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    <label className={s.label}>
        <span className={s.title}>Find contacts by name</span>
        <input
            className={s.input}
            type="text"
            value={value}
            onChange={onChange}
        />
    </label>
)

const mapStateToProps = state => {
  return {
      value: state.contacts.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch(actions.changeFilter(e.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    value: PropTypes.string,
    onChange:PropTypes.func.isRequired
};