import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

const ContactList = ({contacts}) => (
    <ul className={s.list}>
        {contacts.map((contacts)=> (
            <li key={contacts.id}  >
                <ContactListItem contacts={contacts}/>
            </li>
        ))}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

 const getVisibleContacts = (allContacts, filter) => {
    const normilizedFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter));
  }

const mapStateToProps = state => {
    return {
        contacts: getVisibleContacts(state.contacts.items, state.contacts.filter)
    }
  }


export default connect(mapStateToProps,null)(ContactList);

 