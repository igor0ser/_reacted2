import {combineReducers, createStore } from 'redux';
import todos from 'stores/TodoReducer';
import filter from 'stores/FilterReducer';

var reducer = combineReducers({
	todos, filter
	});

var store = createStore(reducer);

export default store;