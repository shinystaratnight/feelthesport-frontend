import React, { useEffect } from "react";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import "./App.css";
import "./fw.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { setGeneralSiteInfo } from "../redux/modules/siteInfo";
import { validateSession } from "../redux/modules/userInfo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import HomePage from "../routes/HomePage";
import AccountPage from "../routes/AccountPage";
import LoginPage from "../routes/LoginPage";
import CartPage from "../routes/CartPage";
import BookingPage from "../routes/BookingPage";
import ArenaPage from "../routes/ArenaPage";
import EventPage from "../routes/EventPage";
import HubPage from "../routes/HubPage";
import TransactionPage from "../routes/TransactionPage";
import NotFoundPage from "../routes/NotFoundPage";
import Loader from "../components/Loader";
import GlobalModal from "../components/GlobalModal";
import PrivateRoute from "../components/PrivateRoute";
import {ConnectedRouter} from "connected-react-router";

const mapDispatchToProps = { setGeneralSiteInfo, validateSession };
export default connect(
  null,
  mapDispatchToProps
)(function App({
  setGeneralSiteInfo: setGeneralSiteInfoDispatcher,
  validateSession: validateSessionDispatcher
}) {
  useEffect(() => {
    setGeneralSiteInfoDispatcher();
    validateSessionDispatcher();
  }, [setGeneralSiteInfoDispatcher, validateSessionDispatcher]);

  return (
    <div className="App--container">
      <Loader />
      <Header />
      <GlobalModal />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/booknplay" component={HubPage} />
        <Route path="/clubs" component={HubPage} />
        <Route path="/learnasport" component={HubPage} />
        <Route path="/events" component={HubPage} />
        <Route
          exact
          path="/arena/:arenaId/:type/:bookaslotId"
          component={BookingPage}
        />
        <Route path="/arena/:id/:sport" component={ArenaPage} />
        <Route exact path="/event/:id" component={EventPage} />
        <PrivateRoute
          access="guest"
          path="/login"
          altPath="/"
          component={LoginPage}
        />
        <PrivateRoute
          access="guest"
          path="/register"
          altPath="/"
          component={LoginPage}
        />
        <PrivateRoute
          access="user"
          path="/account"
          altPath="/login"
          component={AccountPage}
        />
        <PrivateRoute
          access="user"
          exact
          path="/cart"
          altPath="/login"
          component={CartPage}
        />
        <PrivateRoute
          exact
          access="user"
          path="/transactions/:id"
          altPath="/login"
          component={TransactionPage}
        />
        <Route exact path="/bookaslot/:id" component={BookingPage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
      <Footer />
      <Copyright />
    </div>
  );
});
