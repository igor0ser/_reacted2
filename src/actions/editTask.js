const editTask = (text, id) => ({
	type: 'EDIT_TASK',
	payload: {
		text: text,
		id: id
	}
});

export default editTask;