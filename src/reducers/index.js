
import { combineReducers } from "redux";
import catalogReducer from './catalog-reducers';
import compareReducer from './compare-reducers';

var allReducers = combineReducers({ catalog: catalogReducer, compare: compareReducer });
export default allReducers;
