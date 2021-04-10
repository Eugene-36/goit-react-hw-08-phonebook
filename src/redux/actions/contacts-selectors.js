import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.allUsers.filter;
const getAllContacts = (state) => state.allUsers.contacts;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
export default { getFilter, getVisibleContacts };
