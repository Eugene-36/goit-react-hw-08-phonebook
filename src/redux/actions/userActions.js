import { number } from "prop-types";
import { createAction } from "@reduxjs/toolkit";

const addTodoRequest = createAction("contacts/addTodoRequest");
const addTodoSuccess = createAction("contacts/addTodoSuccess");
const addTodoError = createAction("contacts/addTodoError");

const deleteTodoRequest = createAction("contacts/deleteTodoRequest");
const deleteTodoSuccess = createAction("contacts/deleteTodoSuccess");
const deleteTodoError = createAction("contacts/deleteTodoError");

export const changeFilter = createAction("CHANGE_FILTER");

//addTodo,
export default {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  changeFilter,
};
