//with Redux Toolkit
import { createAction } from '@reduxjs/toolkit';
import actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction(actionTypes.ADD_CONTACT, ({name,number}) => ({
    payload: {
        id: uuidv4(),
        name,
        number
    }   
}))

export const deleteContact = createAction(actionTypes.DELETE_CONTACT);
export const changeFilter = createAction(actionTypes.CHANGE_FILTER);

    


//without Redux Toolkit
// import actionTypes from './contacts-types';
// import { v4 as uuidv4 } from 'uuid';

// export const addContact = ({name,number}) => ({
//     type: actionTypes.ADD_CONTACT,
//     payload: {
//       id: uuidv4(),
//       name,
//       number
//     }
// });

// export const deleteContact = contactId => ({
//     type: actionTypes.DELETE_CONTACT,
//     payload: contactId
// });

// export const changeFilter = value => ({
//     type: actionTypes.CHANGE_FILTER,
//     payload: value
// });


