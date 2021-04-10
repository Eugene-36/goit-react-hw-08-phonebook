import { Component } from "react";
import shortid from "shortid";
import s from "./Form.module.css";
import { v4 as unId } from "uuid";

//todo:
import { connect } from "react-redux";
import userAction from "../../redux/actions/create-user";
import todosOperations from "../../redux/actions/todos-operations";
class Form extends Component {
  loginInputId = shortid.generate();
  numberInputId = shortid.generate();
  objId = shortid.generate();
  state = {
    name: "",
    number: "",
    id: "",
  };
  handleChange = (event) => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    this.setState({
      id: unId(),
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    //todo: редакс передал создание нового юзера
    if (this.state.name !== "") {
      this.props.y(this.state);
      this.reset();
      return;
    }
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          <input
            placeholder="Name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.loginInputId}
          />
        </label>

        <label htmlFor={this.numberInputId}>
          <br />

          <input
            placeholder="Number"
            name="number"
            type="text"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <br />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  y: todosOperations.addTodo,
};
export default connect(null, mapDispatchToProps)(Form);
