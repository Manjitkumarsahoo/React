//Create the store
import { legacy_createStore, combineReducers } from 'redux'
import ColorReducer from './ColorReducer';
import CountReducer from './CountReducer';

const allReducers = combineReducers({ count: CountReducer, color: ColorReducer })  //This can Combine all Reducer


//declar the store variable and connect all reducer
const store = legacy_createStore(allReducers)   //{count:0  ,  color:"#000"}

export default store;
