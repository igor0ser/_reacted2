import React from 'react';
import Task from 'components/Task.js';
import store from 'stores/Store';


const style = {
	display: 'flex',
	flexWrap: 'wrap',
	flexDirection: 'row',
	justifyContent: 'center'
};


const TaskList = () => {

	var tasks = store.getState().todos;
	
	if (store.getState().filter !== 'ALL'){
		var flag = store.getState().filter === 'COMPLETED';
		tasks = tasks.filter(item => {
			return item.completed === flag;
		});
	}

	var taskNodes = tasks.map(item => {
		return (
			<Task
				key={item.id}
				id={item.id}
				completed={item.completed}
			>
				{item.text}
			</Task>
		);
	}).reverse();
	return (
		<div style={style}>
			{taskNodes}
		</div>
	);
}

export default TaskList;