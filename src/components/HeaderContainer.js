import React from 'react';
import Paper from 'material-ui/lib/paper';
import HeaderForm from 'components/HeaderForm.js';
import HeaderText from 'components/HeaderText.js';
import FilterContainer from 'components/FilterContainer.js';

const style = {
	height: 200,
	width: 460,
	margin: '40px auto',
	padding: 40,
	textAlign: 'center'
};

const HeaderContainer = () => {
	return (
		<Paper style={style} zDepth={4}>
			<HeaderText />
			<HeaderForm />
			<FilterContainer />
		</Paper>

	);
}

export default HeaderContainer;