import React, { useReducer } from 'react';
import { v4 } from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'Jill@gmail.com',
        phone: '400404040',
        type: 'personal',
      },
      {
        id: 2,
        name: 'James Johnson',
        email: 'James@gmail.com',
        phone: '403203294',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact

  //set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
