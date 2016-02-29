import ls from 'stores/LocalStorage';

var def = ls.getFilter();

const filter = (state=def, action) => {
	let res;

	switch (action.type) {
		case 'SET_FILTER':
			res = action.payload;
			ls.setFilter(res);
			console.log(res);
			return res;
		
		default:
			return state;
	}
};

export default filter;
