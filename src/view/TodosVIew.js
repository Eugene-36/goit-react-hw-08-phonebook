import React, { Component } from "react";
import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import ContactList from "../components/ContactList/ContactList";
import s from "./Todos.module.css";
class TodoViews extends Component {
  render() {
    return (
      <div className={s.loc}>
        <Form />
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default TodoViews;
