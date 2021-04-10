import React from "react";
import { v4 as unId } from "uuid";
import Contacts from "./Contacts.module.css";
import { connect } from "react-redux";
import { todosOperations, visibleSelectors } from "../../redux/actions/index";

const ContactList = ({ allUsers, onDelete }) => (
  <ul className="TodoList">
    {allUsers.map(({ id, name, number }) => (
      <li key={unId()} className="listStyle">
        <p className="TodoList__text">
          {name}:{number}
        </p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDelete(id)}
        >
          Remove
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  allUsers: visibleSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = {
  onDelete: (id) => todosOperations.deleteTodo(id),
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
