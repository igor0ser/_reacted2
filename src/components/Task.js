import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';
import delTask from 'actions/delTask.js';
import toggleTask from 'actions/toggleTask.js';
import editTask from 'actions/editTask.js';

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



const TaskComponent = ({
	completed, id, children,
	onToggle, onDelete, onEdit
}) => {

	const dbClickHandler = (e) => {
		if (!completed) e.target.setAttribute('contentEditable', true)
	}
	const enterHandler = (e) => {
		if (e.key === 'Enter') {
			onEdit(e.target.innerHTML, id);
			e.target.setAttribute('contentEditable', false);
		}
	}
	const blurHandler = (e) => {
		e.target.setAttribute('contentEditable', false);
		e.target.innerHTML = children;
	}

	var btnText = (completed) ? 'Not done' : 'Done';
	var depth = (completed) ? 2 : 4;

	return (
		<Paper style={(completed ? Object.assign({backgroundColor: '#ddd'}, style) : style)}
			zDepth={depth}>
			<p
				style={(completed ? Object.assign({textDecoration: 'line-through'}, pStyle) : pStyle)}
				onDoubleClick={dbClickHandler}
				onKeyPress={enterHandler}
				onBlur={blurHandler}
				tabIndex = '-1'
			>
				{children}
			</p>
			<FlatButton
				label={btnText}
				secondary={true}
				onClick={() => onToggle(id)}
			/>
			<FlatButton
				label="Delete"
				primary={true}
				onClick={() => onDelete(id)}
			/>
		</Paper>
	);
}

const mapDispatch = dispatch => ({
	onToggle: id => dispatch(toggleTask(id)),
	onDelete: id => dispatch(delTask(id)),
	onEdit: (text, id) => dispatch(editTask(text, id))
});


var Task = connect(null, mapDispatch)(TaskComponent);

export default Task;