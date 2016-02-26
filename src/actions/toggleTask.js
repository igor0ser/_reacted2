const toggleTask = function(id){
	return {
		type: 'TOGGLE_TASK',
		payload: id
	};
};

export default toggleTask;