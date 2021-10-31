import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../Reducers/loginReducer";
import { registerReducer } from "../Reducers/registerReducers";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers ( {
  login: loginReducer,
  register: registerReducer,
})

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)