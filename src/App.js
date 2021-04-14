import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
// todos: импорты из моей старой книги
// import Form from "./components/Form/Form";
// import Filter from "./components/Filter/Filter";
// import ContactList from "./components/ContactList/ContactList";
//? Новые импорты.
import AppBar from "./components/AppBar";
import TodoViews from "./view/TodosVIew";
import HomeView from "./view/HomeView";
import RegisterView from "./view/RegisterView";
import LoginView from "./view/LoginView";
import Container from "./components/Container/Container";
import { authOperations } from "./redux/auth";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.onCurrentUser();
  }
  render() {
    return (
      // <div className="App">
      //   <div>
      //     <h1>Phonebook</h1>
      //     <Form />
      //     <h2>Contacts</h2>
      //     <Filter />
      //     <ContactList />
      //   </div>
      // </div>

      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/todos" component={TodoViews} />
        </Switch>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  onCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
