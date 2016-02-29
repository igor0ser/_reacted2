const toggleAllTasks = function(flag){
	return {
		type: 'TOGGLE_ALL_TASKS',
		payload: flag
	};
};

export default toggleAllTasks;