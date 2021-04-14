import axios from "axios";
import actions from "./userActions";
//axios.defaults.baseURL = "http://localhost:4040";

const addTodo = (text) => (dispatch) => {
  dispatch(actions.addTodoRequest());
  axios
    .post("/contacts", text)
    .then(({ data }) => dispatch(actions.addTodoSuccess(data)))
    .catch((error) => dispatch(actions.addTodoError(error.message)));
};

const deleteTodo = (todoId) => (dispatch) => {
  dispatch(actions.deleteTodoRequest());
  axios
    .delete(`/contacts/${todoId}`)
    .then(() => dispatch(actions.deleteTodoSuccess(todoId)))
    .catch((error) => dispatch(actions.deleteTodoError(error.message)));
};
export default { addTodo, deleteTodo };
