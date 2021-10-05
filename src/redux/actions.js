export const addContact = value => ({
    type: 'app/addContact',
    payload: value
});

export const deleteContact = value => ({
    type: 'app/deleteContact',
    payload: value
});

export const changeFilter = value => ({
    type: 'app/changeFilter',
    payload: value
});

export const change = value => ({
    type: 'contactForm/change',
    payload: value
});

export const submit = value => ({
    type: 'contactForm/submit',
    payload: value
});

