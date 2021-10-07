import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action'

import { v4 as uuidv4 } from 'uuid';
import data from '../../data/contacts.json'
import s from './App.module.css';

import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

function App ({contacts, filter, onAddContact, onDeleteContact, onChangeFilter }) {

  // state = {
  //   contacts: data,
  //   filter: ''
  // }

  // addContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number
  //   };
    
  //   if (contacts.find(option => option.name.toLowerCase() === name.toLowerCase())) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
    
  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts]
  //   }))
  // }
  
  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts:prevState.contacts.filter(contact => contact.id !==contactId),
  //   }))
  // }

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // }

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normilizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normilizedFilter));
  // }
  
  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevPops, prevState) {
  //   const { contacts} = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

 
    // const { filter } = this.state;
    // const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <div>
          <h1 className={s.titlePhonebbok}>Phonebook</h1>
          <ContactForm />
          <h2 className={s.titleContacts}>Contacts</h2>
          <Filter value={filter} onChange={onChangeFilter} />
          <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
        </div>
      </Container>
    );
  
}
//так забираем значения пропсов из стейта
//имя функции может быть произвольным, главное порядок передачи в connect
const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter
  }
}
//имя функции может быть произвольным, главное порядок передачи в connect
const mapDispatchToProps = dispatch => {
  return {
    onAddContact: ({name, number}) => dispatch(actions.addContact({name, number})),
    onDeleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
    onChangeFilter: () => dispatch(actions.changeFilter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

