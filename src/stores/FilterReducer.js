import ls from 'stores/LocalStorage';

var def = ls.getFilter();

const filter = (state=def, action) => {
	let res;

	switch (action.type) {

		default:
			return state;
	}
};

export default filter;
