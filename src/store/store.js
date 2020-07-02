import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import appReduser from "./appReduser";
import peoplesReduser from "./peoplesReduser";


let reducers = combineReducers({
    app: appReduser,
    peoples: peoplesReduser 
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;