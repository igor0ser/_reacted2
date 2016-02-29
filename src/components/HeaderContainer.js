import React from 'react';
import Paper from 'material-ui/lib/paper';
import HeaderForm from 'components/HeaderForm.js';
import HeaderText from 'components/HeaderText.js';
import FlatButton from 'material-ui/lib/flat-button';
import store from 'stores/Store';
import setFilter from 'actions/setFilter.js';


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

			<FlatButton 
					label="All" 
					secondary={true}
					onClick = {() => {store.dispatch(setFilter('ALL'))}}
					disabled = {store.getState().filter === 'ALL'}

			/>
			<FlatButton 
					label="Active" 
					secondary={true}
					onClick = {() => {store.dispatch(setFilter('ACTIVE'))}}
					disabled = {store.getState().filter === 'ACTIVE'}
			/>
			<FlatButton 
					label="Completed" 
					secondary={true}
					onClick = {() => {store.dispatch(setFilter('COMPLETED'))}}
					disabled = {store.getState().filter === 'COMPLETED'}

			/>

		</Paper>

	);
}

export default HeaderContainer;