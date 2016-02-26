import React from 'react';
import Paper from 'material-ui/lib/paper';
import HeaderForm from 'components/HeaderForm.js';
import HeaderText from 'components/HeaderText.js';
import FlatButton from 'material-ui/lib/flat-button';

const style = {
	height: 200,
	width: 460,
	margin: '40px auto',
	padding: 40,
	textAlign: 'center'
}

const HeaderContainer = () => {
	return (
		<Paper style={style} zDepth={3}>
			<HeaderText></HeaderText>
			<HeaderForm></HeaderForm>

			<FlatButton label="All" secondary={true} />
			<FlatButton label="Completed" secondary={true} />
			<FlatButton label="Active" secondary={true} />
		</Paper>

	);
}

export default HeaderContainer;