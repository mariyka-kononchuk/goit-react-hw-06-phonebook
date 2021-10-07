//with Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contacts/contacts-reducer'

const store = configureStore({
    reducer: {
        contacts: contactsReducer
    },
    devTools: process.env.NODE_ENV === 'development',
})

export default store;

//without Redux Toolkit
//import { combineReducers } from "redux";
//import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//     contacts: contactsReducer
// })

//const store = createStore(rootReducer, composeWithDevTools());