import React from 'react';
import FilterButton from 'components/FilterButton';

const FilterContainer = () => (
	<div>
		<FilterButton
			filter="ALL"
		/>
		<FilterButton
			filter="ACTIVE"
		/>
		<FilterButton
			filter="COMPLETED"
		/>
	</div>
);

export default FilterContainer;