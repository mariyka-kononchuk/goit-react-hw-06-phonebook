import { createStore } from "redux";
import data from '../../src/data/contacts.json';

const initialState = { contacts: data, filter: '', name: '', number: '', id: '' }

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'app/addContact':
            return { contacts: [payload, ...state.contacts] };
        case 'app/deleteContact':
            return { contacts: state.contacts.filter(contact => contact.id!== payload) };
        case 'app/changeFilter':
            return { filter: payload.currentTarget.value  };
        default:
            return state;
    };
}

const store = createStore(reducer);

export default store;