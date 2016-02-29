import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/lib/snackbar';

const ChangeMessageComponent = ({stateTodos}) => {
	var activeTasks = stateTodos.filter((item) => {
		return !item.completed;
	})
	var flag = activeTasks.length > 0;
	var message = activeTasks.length + ' tasks left';
	return (
		<Snackbar
			open={flag}
			message={message}
			autoHideDuration={1000}
			onRequestClose={() => {}}
		/>
	);
}

const mapState = (state) => {
	return {
		stateTodos: state.todos
	};
}

var ChangeMessage = connect(mapState, null)(ChangeMessageComponent);

export default ChangeMessage;
