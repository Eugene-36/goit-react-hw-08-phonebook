import React, { Component, Suspense, lazy } from "react";
import "./App.css";

import { Switch } from "react-router-dom";

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
