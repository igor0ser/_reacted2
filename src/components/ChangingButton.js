import React from 'react';
import IconButton from 'material-ui/lib/icon-button';
import ActionCached from 'material-ui/lib/svg-icons/action/cached';
import store from 'stores/Store';
import Colors from 'material-ui/lib/styles/colors';
import toggleAllTasks from 'actions/toggleAllTasks.js';

const ChangingButton = () => {

	var flag = !store.getState().todos.every(function(item){
		return item.completed;
	});
	var disabled = store.getState().todos.length === 0;

	var tooltip = disabled ? '' : flag ? 'Make all done' : 'Make all not done';
	var color = disabled ?  Colors.grey500 : flag ? Colors.cyan500 : Colors.pink500;

	return (
		<IconButton
			tooltip={tooltip}
			touch={true}
			tooltipPosition='top-center'
			disabled={disabled}
			onClick={() => {store.dispatch(toggleAllTasks(flag))}}
		>
			<ActionCached
				color={color}
			/>
		</IconButton>
	);
}

export default ChangingButton;

