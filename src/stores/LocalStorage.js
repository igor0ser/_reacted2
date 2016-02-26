var KEY = 'react_store_key';

var ls = {
	get: function(){
		var json = localStorage.getItem(KEY);
		if (!json) return [];
		var model = JSON.parse(json);
		return model;
	},
	set: function(model){
		var json = JSON.stringify(model);
		localStorage.setItem(KEY, json);
	},
	clear: function(){
		localStorage.clear();
	}
};

export default ls;
