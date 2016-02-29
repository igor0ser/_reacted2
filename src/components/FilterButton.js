import React from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import store from 'stores/Store';
import setFilter from 'actions/setFilter.js';

const FilterButton = (props) => {

	return (
			<FlatButton
					label={props.filter}
					secondary={store.getState().filter === props.filter}
					onClick = {() => {store.dispatch(setFilter(props.filter))}}
			></FlatButton>
	);
}

export default FilterButton;