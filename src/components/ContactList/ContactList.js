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
//  getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const normilizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilizedFilter));
//   }

const mapStateToProps = state => {
    const { filter, items } = state.contacts;
    const normilizedFilter = filter.toLowerCase();
    const visibleContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter));
  return {
    contacts: visibleContacts
  }
}

export default connect(mapStateToProps,null)(ContactList);

 