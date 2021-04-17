import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "./RegisterView.module.css";
console.log(s);
class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className={s.centr}>Страница регистрации</h1>

        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={s.postcard}
        >
          <div className={s.formrow}>
            <label>
              Имя
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={s.formrow}>
            <label>
              Почта
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className={s.formrow}>
            <label>
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className={s.edit}
              />
            </label>
          </div>
          <button className={s.floatingButton} type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
