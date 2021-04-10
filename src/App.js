import { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
// todos: импорты из моей старой книги
// import Form from "./components/Form/Form";
// import Filter from "./components/Filter/Filter";
// import ContactList from "./components/ContactList/ContactList";
//? Новые импорты.
import AppBar from "./components/AppBar";
import TodosView from "./view/TodosVIew";
import HomeView from "./view/HomeView";
import RegisterView from "./view/RegisterView";
import LoginView from "./view/LoginView";
import Container from "./components/Container/Container";
class App extends Component {
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
          <Route path="/todos" component={TodosView} />
        </Switch>
      </Container>
    );
  }
}

export default App;
