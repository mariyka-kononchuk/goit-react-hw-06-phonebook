import actionTypes from './contacts-types'

export const addContact = value => ({
    type: actionTypes.ADD_CONTACT,
    payload: value
});

export const deleteContact = contactId => ({
    type: actionTypes.DELETE_CONTACT,
    payload: contactId
});

export const changeFilter = value => ({
    type: actionTypes.CHANGE_FILTER,
    payload: value
});

export const changeForm = value => ({
    type: actionTypes.CHANGE_FORM,
    payload: value
});

export const submit = value => ({
    type: actionTypes.SUBMIT,
    payload: value
});

