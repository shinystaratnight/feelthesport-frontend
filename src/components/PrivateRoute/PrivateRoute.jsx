import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { push } from "connected-react-router";
import { setRedirectAfterLogin } from "../../redux/modules/siteInfo";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.userState.id)
});

const mapDispatchToProps = { push, setRedirectAfterLogin };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function PrivateRoute({
  location,
  computedMatch,
  path,
  access,
  altPath,
  component: Component,
  loggedIn,
  push: pushDispatcher,
  setRedirectAfterLogin,
  ...props
}) {
  if (access === "user" && !loggedIn) {
    setRedirectAfterLogin(location.pathname);
    pushDispatcher(altPath);
    return false;
  } else if (access === "guest" && loggedIn) {
    pushDispatcher(altPath);
    return false;
  }
  return <Route {...props} path={path} component={Component} />;
});
