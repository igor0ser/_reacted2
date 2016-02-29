import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/lib/flat-button';
import setFilter from 'actions/setFilter';

const FilterButtonComponent = (props) => {
	return (
			<FlatButton
					label={props.filter}
					secondary={props.stateFilter === props.filter}
					onClick = {() => {props.onFilterClick(props.filter)}}
			></FlatButton>
	);
}

const mapDispatch = (dispatch) => {
	return {
		onFilterClick: function(filter){
			dispatch(setFilter(filter));
		}
	};
}

const mapState = (state) => {
	return {
		stateFilter: state.filter
	};
}


var FilterButton = connect(mapState, mapDispatch)(FilterButtonComponent);


export default FilterButton;