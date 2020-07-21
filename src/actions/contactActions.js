import { GET_CONTACTS, DEL_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "./types";
import axios from 'axios';

export const getContacts = () => async dispatch => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/users')
  dispatch ({
      type: GET_CONTACTS,
      payload: res.data
  });
};
export const getContact = (id) => async dispatch => {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
  dispatch ({
      type: GET_CONTACT,
      payload: res.data
  });
};
export const delContact = (id) => async dispatch => {
    await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
  dispatch ({
    type: DEL_CONTACT,
    payload: id,
  });
};

export const addContact = (contact) => async dispatch => {
    const res = await axios.post('http://jsonplaceholder.typicode.com/users', contact)
  dispatch ({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContact = (contact) => async dispatch => {
    const res = await axios.put(`http://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
  dispatch ({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
