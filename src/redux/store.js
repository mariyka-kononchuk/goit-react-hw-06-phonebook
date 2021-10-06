import { createStore, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { itemsReducer, filterReducer } from '../redux/contacts/contacts-reducer'

// const initialState = { items: data, filter: '', name: '', number: '', id: '' }

// const reducer = (state = initialState, {type, payload}) => {
//     switch (type) {
//         case 'app/addContact':
//             return {
//                 ...state,
//                 items: [payload, ...state.items]

//             };
//         case 'app/deleteContact':
//             return {
//                 ...state,
//                 items: state.items.filter(contact => contact.id !== payload)
                
//             };
//         case 'app/changeFilter':
//             return {
//                ...state, 
//                 filter: payload.value   
//             };
//         default:
//             return state;
//     };
// }



const rootReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;