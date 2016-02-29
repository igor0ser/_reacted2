const setFilter = function(filter){
	return {
		type: 'SET_FILTER',
		payload: filter
	};
};

export default setFilter;