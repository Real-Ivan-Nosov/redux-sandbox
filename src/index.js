import { createStore, bindActionCreators } from "redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from "./components/App";

// import * as actions from "./actions";

const store = createStore(reducer);

// const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// const { inc, dec, rnd } =
//   bindActionCreators(actions, dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))