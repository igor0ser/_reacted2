import React from 'react';
import TextField from 'material-ui/lib/text-field';
import store from 'stores/Store';
import addTask from 'actions/addTask.js';

const HeaderForm = () => {

	const handler = (e) => {
		if (e.target.value !== ''){
			store.dispatch(addTask(e.target.value));
			e.target.value = '';
		}

	}

	return (
			<TextField
				floatingLabelText="Enter task"
				onEnterKeyDown = {handler}
			>
			</TextField>
	);
}

export default HeaderForm;