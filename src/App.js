import React, { Component, Suspense, lazy } from "react";
import "./App.css";

import { Switch } from "react-router-dom";
// todos: импорты из моей старой книги
// import Form from "./components/Form/Form";
// import Filter from "./components/Filter/Filter";
// import ContactList from "./components/ContactList/ContactList";
//? Новые импорты.
import AppBar from "./components/AppBar";
import Container from "./components/Container/Container";
import { authOperations } from "./redux/auth";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./view/HomeView"));
const RegisterView = lazy(() => import("./view/RegisterView"));
const LoginView = lazy(() => import("./view/LoginView"));
const TodoViews = lazy(() => import("./view/TodosVIew"));
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
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              component={RegisterView}
              redirectTo="/todos"
            />
            <PublicRoute
              path="/login"
              component={LoginView}
              restricted
              redirectTo="/todos"
            />
            <PrivateRoute
              path="/todos"
              redirectTo="/login"
              component={TodoViews}
            />
            {/* <Route path="/todos" component={TodoViews} /> */}
          </Switch>
        </Suspense>
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
