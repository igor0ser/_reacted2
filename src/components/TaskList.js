import React from 'react';
import Task from 'components/Task.js';
import store from 'stores/Store';


const style = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center'
};


const TaskList = () => {

	var tasks = store.getState().todos;

	if (store.getState().filter !== 'ALL'){
		console.log(store.getState().filter === 'COMPLETED');
		var flag = store.getState().filter === 'COMPLETED';
		tasks = tasks.filter(item => {
			console.log('com = ', item.completed)
			return item.completed === flag;
		})
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
	});
	console.log(store.getState().filter);
	console.log('taskNodes1=', taskNodes);


	console.log('taskNodes2=',taskNodes);



	return (
		<div style={style}>
			{taskNodes}
		</div>
	);
}

export default TaskList;