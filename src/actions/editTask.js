const editTask = function(text, id){
	return {
		type: 'EDIT_TASK',
		payload: {
			text: text,
			id: id
		}
	};
};

export default editTask;