var KEY_TODOS = 'react_store_key_todos';
var KEY_FILTER = 'react_store_key_filter';

var ls = {
	getTodos: function(){
		var json = localStorage.getItem(KEY_TODOS);
		if (!json) return [];
		var model = JSON.parse(json);
		return model;
	},
	setTodos: function(model){
		var json = JSON.stringify(model);
		localStorage.setItem(KEY_TODOS, json);
	},
	getFilter: function(){
		var json = localStorage.getItem(KEY_FILTER);
		if (!json) return 'ALL';
		return json;
	},
	setFilter: function(model){
		localStorage.setItem(KEY_FILTER, model);
	},
	clear: function(){
		localStorage.clear();
	}
};

export default ls;
