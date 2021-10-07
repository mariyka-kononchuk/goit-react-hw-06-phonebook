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
  
  

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // }

 
    return (
      <Container>
        <div>
          <h1 className={s.titlePhonebbok}>Phonebook</h1>
          <ContactForm />
          <h2 className={s.titleContacts}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </Container>
    );
  
}

export default connect()(App);

