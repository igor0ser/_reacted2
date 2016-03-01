import React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/lib/snackbar';

const ChangeMessageComponent = ({todos}) => {
	var tasksLeft = todos.filter(item => !item.completed).length;
	return (
		<Snackbar
			open={tasksLeft > 0}
			message={tasksLeft + ' tasks left'}
			onRequestClose={() => {}}
		/>
	);
}

const mapState = ({todos}) => ({todos});

var ChangeMessage = connect(mapState, null)(ChangeMessageComponent);

export default ChangeMessage;
