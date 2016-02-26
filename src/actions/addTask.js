const addTask = function(text){
	return {
		type: 'ADD_TASK',
		payload: {
			text: text,
			id: new Date().getTime()
		}
	};
};

export default addTask;