import data from '../../../src/data/contacts.json';
const itemsInitialState = { items: data }

export const itemsReducer = (state = itemsInitialState, { type, payload }) => {
    switch (type) {
        case 'app/addContact':
            return {
                ...state,
                items: [payload, ...state.items]
            };
        case 'app/deleteContact':
            return {
                ...state,
                items: state.items.filter(contact => contact.id !== payload)
            };
        default:
            return state;
    };
    
}

const filterInitialState = { filter: '' }

export const filterReducer = (state = filterInitialState, { type, payload }) => {
     switch (type) {
        case 'app/changeFilter':
             return {
                ...state,
                filter: payload.value   
            };
        default:
            return state;
    };
}