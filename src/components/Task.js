import React from 'react';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';
import store from 'stores/Store';
import delTask from 'actions/delTask.js';
import toggleTask from 'actions/toggleTask.js';

const style = {
	height: 200,
	width: 200,
	padding: 20,
	textAlign: 'center',
	margin: 10
};

const pStyle = {
	height: 70,
	width: 160,
	overflow: 'hidden'
}



const Task = (props) => {
	const delHandler = () => {
		store.dispatch(delTask(props.id));
	}
	const toggleHandler = () => {
		store.dispatch(toggleTask(props.id));
	}

	var done = props.completed;
	var text = (done) ? 'Undone' : 'Done';

	return (
		<Paper style={(done ? Object.assign({backgroundColor: '#ddd'}, style) : style)}
			zDepth={3}>
			<p style={(done ? Object.assign({textDecoration: 'line-through'}, pStyle) : pStyle)}>
				{props.children}
			</p>
			<FlatButton
				label={text}
				secondary={true}
				onClick={toggleHandler}
				/>
			<FlatButton
				label="Delete"
				primary={true}
				onClick={delHandler}
			/>
		</Paper>
	);
}

export default Task;