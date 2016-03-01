import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/lib/text-field';
import addTask from 'actions/addTask';

const HeaderFormComponent = ({onTaskSubmit}) => {
	const submitHandler = (e) => {
		if (e.target.value !== ''){
			onTaskSubmit(e.target.value);
			e.target.value = '';
		}
	};

	return (
		<TextField
			floatingLabelText="Enter task"
			onEnterKeyDown = {submitHandler}
		>
		</TextField>
	);
}

const mapDispatch = dispatch => ({
	onTaskSubmit: text => dispatch(addTask(text))
});

var HeaderForm = connect(null, mapDispatch)(HeaderFormComponent);

export default HeaderForm;