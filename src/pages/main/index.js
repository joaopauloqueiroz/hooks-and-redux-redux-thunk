import React from "react";
import { connect } from 'react-redux'
import { useSelector, useDispatch, useStore } from "react-redux";
import * as AuthActions from "../../store/actions";
// import {bindActionCreators} from 'redux'

function Main ({signIn, signOut}) {
  const onsave = useSelector(state => state.forbiden.onsave)
  const dispatch = useDispatch()
  const store = useStore()

  function modify(){
    dispatch({type: 'FORBIDEN', onsave: true})
  }
  return <div>
    {onsave ? "OLÁ" : "Não"}
    <h1>Main</h1>
    <button onClick={signIn}>Entrar</button>
    <button onClick={modify}>Mostra esconde</button>
  </div>
}

export default connect(
  null,
  AuthActions
  )(Main);