import React from 'react';
import Paper from 'material-ui/lib/paper';
import HeaderForm from 'components/HeaderForm';
import HeaderText from 'components/HeaderText';
import FilterContainer from 'components/FilterContainer';

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