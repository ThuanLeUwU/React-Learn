import { createStore } from "redux";
import {ageReducer} from './ageReducer';

export const initState= {
    name:'Van Than',
    age: 18,
    description:'',
}

export const configureStore3=()=> {
    const store=createStore(ageReducer,initState);
    return store;
}