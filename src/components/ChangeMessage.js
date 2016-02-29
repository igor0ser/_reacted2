import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';
import store from 'stores/Store';

const ChangeMessage = () => {
	var activeTasks = store.getState().todos.filter((item) => {
		return !item.completed;
	})
	var flag = activeTasks.length > 0;
	var handleRequestClose = () => {

	}
	var message = activeTasks.length + ' tasks left';
	return (
		<Snackbar
			open={flag}
			message={message}

			autoHideDuration={1000}
			onRequestClose={handleRequestClose}
		/>
	);
}

export default ChangeMessage;
