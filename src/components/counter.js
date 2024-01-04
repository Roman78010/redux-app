import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { bindActionCreators } from 'redux';


const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={dec} className="btn btn-primary">Dec</button>
      <button onClick={inc} className="btn btn-primary">Inc</button>
      <button onClick={rnd} className="btn btn-primary">Rnd</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch)
// }

export default connect(mapStateToProps, actions)(Counter);