import { createStore, combineReducers } from 'redux';
import jogsReducer from './jogs-reducers';

const reducers = combineReducers({
    jogs: jogsReducer
});

export default createStore(reducers);