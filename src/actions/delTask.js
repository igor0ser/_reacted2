const delTask = function(id){
	return {
		type: 'DEL_TASK',
		payload: id
	};
};

export default delTask;