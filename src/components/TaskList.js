import React from 'react';
import { connect } from 'react-redux';
import Task from 'components/Task';

const style = {
	display: 'flex',
	flexWrap: 'wrap',
	flexDirection: 'row',
	justifyContent: 'center'
};

const TaskListComponent = ({todos, filter}) => {
	var tasks = todos;
	if (filter !== 'ALL'){
		var flag = filter === 'COMPLETED';
		tasks = tasks.filter(item => item.completed === flag);
	}
	var taskNodes = tasks.map(item => (
		<Task
			key={item.id}
			id={item.id}
			completed={item.completed}
		>
			{item.text}
		</Task>
	)).reverse();

	return (
		<div style={style}>
			{taskNodes}
		</div>
	);
}

const mapState = ({todos, filter}) => ({todos, filter});

var TaskList = connect(mapState, null)(TaskListComponent);

export default TaskList;