import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ageReducer } from "./ageReducer";

export const configureStore4=() => {
    const store=createStore(ageReducer,applyMiddleware(thunk));
    return store;
}