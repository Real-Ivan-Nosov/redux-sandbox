import { createStore } from "redux";

const initialState = 0;

const reducer = (state = 0, action) => {
  
  switch (action.type) {
    case 'INC':
      return state +=1;
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
})


console.log(store);
const actio = store.dispatch({ type: 'INC' });
console.log(actio);
store.dispatch({ type: 'INC' });
