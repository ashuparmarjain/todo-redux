import {createStore} from 'redux';
import todoAppReducers from './reducers/reducers.js';

let store = createStore(todoAppReducers);

export default store;