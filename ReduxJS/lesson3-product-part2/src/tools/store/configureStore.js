import { applyMiddleware, combineReducers, createStore } from "redux";
import { productReducer } from "../reducers/productReducer";
import { categoryReducer } from "../reducers/categoryReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const myCustomMiddleware = store => next => action => {
  return next(action); 
};


const configureStore = () => {
    const store = createStore(
        combineReducers({
            product: productReducer,
            category: categoryReducer
        }),
        composeWithDevTools(applyMiddleware(myCustomMiddleware))
    );
    return store;
}

export default configureStore;