import { combineReducers } from "redux";
import counterReducer from "./counterReducers";

const reducers = combineReducers({
    counterReducer
    // counterReducer: counterReducer yukardaki ile aynı sonuc alınır 
});

export default reducers;
