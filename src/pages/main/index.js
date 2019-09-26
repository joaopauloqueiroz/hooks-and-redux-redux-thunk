import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch, useStore } from "react-redux";
import * as AuthActions from "../../store/actions";
import Layout from "../../components/layouyt";
function Main({ signIn, signOut }) {
  const onsave = useSelector(state => state.forbiden.onsave);
  const dispatch = useDispatch();
  const store = useStore();

  function modify() {
    dispatch({ type: "FORBIDEN", onsave: !onsave });
  }

  return <Layout />;
}

export default connect(
  null,
  AuthActions
)(Main);
