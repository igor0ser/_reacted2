import React from 'react';
import TextField from 'material-ui/lib/text-field';
import store from 'stores/Store';
import addTask from 'actions/addTask.js';

/*var style = {
};
*/
const HeaderForm = () => {

	const handler = (event) => {
		store.dispatch(addTask(event.target.value));
		event.target.value = '';
	}

	return (
	<div>
		<TextField
			floatingLabelText="Enter task"
			onEnterKeyDown = {handler}
		>
		</TextField>
	</div>
	);
}

export default HeaderForm;