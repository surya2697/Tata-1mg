import {legacy_createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import {productReducer,singleProductReducer} from "../Redux/Products/reducer"
import {authReducer} from "./Auth/authentication/auth.reducer"
const rootReducer = combineReducers({
   
    productsList:productReducer,
    auth:authReducer,
    singleProduct:singleProductReducer
   
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))