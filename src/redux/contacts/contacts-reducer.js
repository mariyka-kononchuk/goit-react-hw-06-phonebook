import { combineReducers } from 'redux';
import data from '../../../src/data/contacts.json';
import types from './contacts-types'

// const itemsInitialState = { items: data }

// export const itemsReducer = (state = itemsInitialState, { type, payload }) => {
//     switch (type) {
//         case actionTypes.ADD_CONTACT:
//             return {
//                 ...state,
//                 items: [payload, ...state.items]
//             };
//         case actionTypes.DELETE_CONTACT:
//             return {
//                 ...state,
//                 items: state.items.filter(contact => contact.id !== payload)
//             };
//         default:
//             return state;
//     };
    
// }

// const filterInitialState = { filter: '' }

// export const filterReducer = (state = filterInitialState, { type, payload }) => {
//      switch (type) {
//         case actionTypes.CHANGE_FILTER:
//              return {
//                 ...state,
//                 filter: payload.value   
//             };
//         default:
//             return state;
//     };
// }

const items = (state = data, {type, payload}) => {
    switch (type) {
        case types.ADD_CONTACT:
            return [payload,...state];
        default:
            return state;
    }
    
}

const filter = (state = '', action) => {
    return state;
}

export default combineReducers({
    items,
    filter
});