import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

const fetchTodos = () => {
  return axios.get("/todos").then((respons) => respons.data);
};

const deleteTodo = (todoId) => {
  return axios.delete(`/todos/${todoId}`);
};

const UpdateTodo = (todoId, update) => {
  return axios.patch(`/todos/${todoId}`, update).then(({ data }) => data);
};

export default { fetchTodos, deleteTodo, UpdateTodo };
