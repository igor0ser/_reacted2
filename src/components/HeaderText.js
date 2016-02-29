import React from 'react';
import ChangingButton from 'components/ChangingButton.js';

const style = {
	textTransform: 'uppercase',
	margin: 0,
	marginLeft: -48
}

const HeaderText = () => {
	return (
			<h1 style={style}>
				<ChangingButton/>
				todos
			</h1>
	);
}

export default HeaderText;