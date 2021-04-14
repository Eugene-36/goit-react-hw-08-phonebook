import React, { Component } from "react";
import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";

class TodoViews extends Component {
  render() {
    return (
      <>
        <Form />
        <Filter />
        <ContactList />
      </>
    );
  }
}

export default TodoViews;
