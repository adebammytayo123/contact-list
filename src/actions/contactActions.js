import { GET_CONTACTS, DEL_CONTACT, ADD_CONTACT } from './types';

export const getContacts = () => {
    return {
        type: GET_CONTACTS
    };

};
export const delContact = (id) => {
    return {
        type: DEL_CONTACT,
        payload: id
    };

};

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload : contact
    };

};



