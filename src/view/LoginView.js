import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "./LoginView.module.css";
console.log(authOperations);
class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={s.centered}>
        <form onSubmit={this.handleSubmit} autoComplete="off" className={s.fr}>
          <h1 className={s.head}>Страница логина</h1>
          <label className={s.label}>
            Почта
            <input
              className={s.st}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={s.label}>
            Пароль
            <input
              className={s.st}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className={s.bt} type="submit">
            Войти
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
