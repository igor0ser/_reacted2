import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/lib/flat-button';
import setFilter from 'actions/setFilter';

const FilterButtonComponent = ({
	stateFilter, filter, onFilterClick
}) => (
		<FlatButton
			label={filter}
			secondary={stateFilter === filter}
			onClick = {() => {onFilterClick(filter)}}
		>
		</FlatButton>
);

const mapDispatch = (dispatch) => ({
	onFilterClick: (filter) => dispatch(setFilter(filter))
});

const mapState = ({filter}) => ({stateFilter: filter});

var FilterButton = connect(mapState, mapDispatch)(FilterButtonComponent);

export default FilterButton;