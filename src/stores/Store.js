import {combineReducers, createStore } from 'redux';
import ls from 'stores/LocalStorage';
import todos from 'stores/TodoReducer';
import filter from 'stores/FilterReducer';

var reducer = combineReducers({
	todos: todos,
	filter: filter
	});

var store = createStore(reducer);

export default store;