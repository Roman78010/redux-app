import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'))

  
  
// const {dispatch} = store

// actions = {
//   inc: inc,
//   dec: dec,
//   rnd: rnd
// }


// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators(
//   {
//     incDispatch: inc,
//     // incDispatch: () => {
//     //   dispatch(inc())
//     // },
//     decDispatch: dec,
//     rndDispatch: rnd,
//   }, dispatch)
// const decDispatch = bindActionCreators(dec, dispatch)
// const rndDispatch = bindActionCreators(rnd, dispatch)

// document.getElementById('inc').addEventListener('click', inc)
// document.getElementById('dec').addEventListener('click', dec)
// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10)
//   rnd(value)
// })

// const update = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <App/>
//     </Provider>,
//     document.getElementById('root'))
// }

// update()

// store.subscribe(update)


// store.subscribe(() => {
//   console.log(store.getState())
// })

// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})
// store.dispatch({type: 'INC'})



// let state = reducer(undefined, {})

// state = reducer(state, {type: 'INC'})
// console.log(state)
// state = reducer(state, {type: 'INC'})
// console.log(state)