import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import authSelector from "../redux/auth/auth-selector";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelector.getisAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
