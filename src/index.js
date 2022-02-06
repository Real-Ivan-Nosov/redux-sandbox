import { createStore, bindActionCreators } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';

import Counter from "./Counter";

import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

const { inc, dec, rnd } =
  bindActionCreators(actions, dispatch);



const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const rndValue = Math.floor(Math.random() * 10);
        rnd(rndValue)
      }} />,
    document.getElementById('root'))
}

update();
store.subscribe(update);

