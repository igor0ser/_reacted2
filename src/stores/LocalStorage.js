var KEY_TODOS = 'react_store_key_todos';
var KEY_FILTER = 'react_store_key_filter';

var ls = {
	getTodos: () => {
		var json = localStorage.getItem(KEY_TODOS);
		if (!json) return [];
		return (json) ? JSON.parse(json) : [];
	},
	setTodos: model => {
		var json = JSON.stringify(model);
		localStorage.setItem(KEY_TODOS, json);
	},
	getFilter: () => {
		var json = localStorage.getItem(KEY_FILTER);
		if (!json) return 'ALL';
		return (json) ? json : 'ALL';
	},
	setFilter: model => {
		localStorage.setItem(KEY_FILTER, model);
	},
	clear: () => {
		localStorage.clear();
	}
};

export default ls;
