const addTask = (text) => ({
	type: 'ADD_TASK',
	payload: {
		text: text,
		id: new Date().getTime()
	}
});

export default addTask;