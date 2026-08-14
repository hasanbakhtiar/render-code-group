import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import { createStore } from 'redux';

const initialState = {
  count: 0
}


const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + (action.myvalue ?? 1)
      };
      break;

    case "DERCREMENT":
      return {
        count: state.count - 1
      };
      break;


    default:
      return state;
      break;
  }
};

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: "INCREMENT",
  myvalue: 5
})
store.dispatch({
  type: "INCREMENT",
  myvalue: 15
})
store.dispatch({
  type: "DERCREMENT"
})
store.dispatch({
  type: "DERCREMENT"
})
store.dispatch({
  type: "INCREMENT"
})












createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
