import React from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/lib/icon-button';
import ActionCached from 'material-ui/lib/svg-icons/action/cached';
import Colors from 'material-ui/lib/styles/colors';
import toggleAllTasks from 'actions/toggleAllTasks';

const ChangingButtonComponent = (props) => {

	var flag = !props.stateTodos.every(function(item){
		return item.completed;
	});
	var disabled = props.stateTodos.length === 0;

	var tooltip = disabled ? '' : flag ? 'Make all done' : 'Make all not done';
	var color = disabled ?  Colors.grey500 : flag ? Colors.cyan500 : Colors.pink500;

	return (
		<IconButton
			tooltip={tooltip}
			touch={true}
			tooltipPosition='top-center'
			disabled={disabled}
			onClick={() => {props.onToggleTasks(flag)}}
		>
			<ActionCached
				color={color}
			/>
		</IconButton>
	);
}

const mapDispatch = (dispatch) => {
	return {
		onToggleTasks: function(flag){
			dispatch(toggleAllTasks(flag));
		}
	};
}

const mapState = (state) => {
	return {
		stateTodos: state.todos
	};
}

var ChangingButton = connect(mapState, mapDispatch)(ChangingButtonComponent);


export default ChangingButton;

