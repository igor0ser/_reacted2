import React from 'react';
import Task from 'components/Task.js';
import store from 'stores/TodoStore';


const style = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center'
};


const TaskList = () => {

	var taskNodes = store.getState().map(item => {
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


	return (
		<div style={style}>
			{taskNodes}
		</div>
	);
}

export default TaskList;