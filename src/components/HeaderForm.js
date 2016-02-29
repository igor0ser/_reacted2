import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/lib/text-field';
import addTask from 'actions/addTask';

const HeaderFormComponent = (props) => {

	const handler = (e) => {
		if (e.target.value !== ''){
			props.onTaskSubmit(e.target.value);
			e.target.value = '';
		}
	}

	return (
			<TextField
				floatingLabelText="Enter task"
				onEnterKeyDown = {handler}
			>
			</TextField>
	);
}

const mapDispatch = (dispatch) => {
	return {
		onTaskSubmit: function(text){
			dispatch(addTask(text));
		}
	};
}

var HeaderForm = connect(null, mapDispatch)(HeaderFormComponent);


export default HeaderForm;