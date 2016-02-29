import React from 'react';
import FilterButton from 'components/FilterButton.js';

const FilterContainer = () => {

	return (
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
}

export default FilterContainer;