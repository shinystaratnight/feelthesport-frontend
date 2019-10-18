import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs";
import AccountNav from "../../components/AccountNav";
import AccountProfileTab from "../../components/AccountProfileTab";
import AccountPointsTab from "../../components/AccountPointsTab";
import AccountHistoryTab from "../../components/AccountHistoryTab";
import AccountClubsTab from "../../components/AccountClubsTab";
import AccountReferTab from "../../components/AccountReferTab";
import AccountSupportTab from "../../components/AccountSupportTab";
import AccountTermsTab from "../../components/AccountTermsTab";
import "./AccountPage.css";

const mapStateToProps = state => ({
  userInfo: state.userState.id
});

export default connect(mapStateToProps)(function AccountPage({
  userInfo,
  location
}) {
  // if (!userInfo) return <Redirect to="/" />;

  const activeTab = location.pathname
    .split("/")
    .filter(url => url.length !== 0)[1];

  return (
    <div className="AccountPage--container">
      <div>
        <Breadcrumbs />
        <h1 className="fnt-title1 fgc-darkOrange">MY ACCOUNT</h1>
      </div>
      <main>
        <AccountNav activeTab={activeTab} />
        <Switch>
          <Route exact path="/account/profile" component={AccountProfileTab} />
          <Route exact path="/account/points" component={AccountPointsTab} />
          <Route exact path="/account/history" component={AccountHistoryTab} />
          <Route exact path="/account/clubs" component={AccountClubsTab} />
          <Route exact path="/account/refer" component={AccountReferTab} />
          <Route exact path="/account/support" component={AccountSupportTab} />
          <Route exact path="/account/terms" component={AccountTermsTab} />
          <Route path="/" render={() => <Redirect to="/account/profile" />} />
        </Switch>
      </main>
    </div>
  );
});
