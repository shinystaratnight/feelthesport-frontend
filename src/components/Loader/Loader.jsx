import React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import "./Loader.css";

const mapStateToProps = state => ({
  isLoading: state.apiState.apiLoading
});

export default connect(mapStateToProps)(function Loader({ isLoading }) {
  if (isLoading) {
    return (
      <div className="Loader--container">
        <Spinner />
      </div>
    );
  }
  return <div className="Loader--container--notLoading" />;
});
