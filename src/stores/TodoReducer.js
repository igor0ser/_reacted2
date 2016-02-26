import ls from 'stores/LocalStorage';

var def = ls.getTodos();

const todos = (state=def, action) => {
	let res;

	switch (action.type) {
		case 'ADD_TASK':
			var newTask = {
				text: action.payload.text,
				id: action.payload.id,
				completed: false
			}
			res = state.concat(newTask);
			ls.setTodos(res);
			return res;
		case 'DEL_TASK':
			res = state.filter(
				item => item.id !== action.payload
			);
			ls.setTodos(res);
			return res;
		case 'TOGGLE_TASK':
			res = state.map(item => {
				if (item.id === action.payload) {
					item.completed = !item.completed;
				}
				return item;
			}
			);
			ls.setTodos(res);
			return res;
		default:
			return state;
	}
};

export default todos;

