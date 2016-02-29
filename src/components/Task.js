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



const TaskComponent = (props) => {
	var done = props.completed;

	const delHandler = () => {
		props.onDelete(props.id);
	}
	const toggleHandler = () => {
		props.onToggle(props.id);
	}
	const dbClickHandler = (e) => {
		if (!done){
			e.target.setAttribute('contentEditable', true);
		}
	}
	const enterHandler = (e) => {
		if (e.key === 'Enter') {
			props.onEdit(e.target.innerHTML, props.id);
			e.target.setAttribute('contentEditable', false);
		}
	}

	const blurHandler = (e) => {
		e.target.setAttribute('contentEditable', false);
		e.target.innerHTML = props.children;
	}


	var text = (done) ? 'Not done' : 'Done';
	var depth = (done) ? 2 : 4;

	return (
		<Paper style={(done ? Object.assign({backgroundColor: '#ddd'}, style) : style)}
			zDepth={depth}>
			<p
				style={(done ? Object.assign({textDecoration: 'line-through'}, pStyle) : pStyle)}
				onDoubleClick={dbClickHandler}
				onKeyPress={enterHandler}
				onBlur={blurHandler}
				tabIndex = '-1'
				className = 'task'
			>
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

const mapDispatch = (dispatch) => {
	return {
		onToggle: function(id){
			dispatch(toggleTask(id));
		},
		onDelete: function(id){
			dispatch(delTask(id));
		},
		onEdit: function(text, id){
			dispatch(editTask(text, id));
		}
	};
}

const mapState = (state) => {
	return {
		stateTodos: state.todos
	};
}

var Task = connect(mapState, mapDispatch)(TaskComponent);

export default Task;