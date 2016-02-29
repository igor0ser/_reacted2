require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from 'components/HeaderContainer.js'
import TaskList from 'components/TaskList.js'
import ChangeMessage from 'components/ChangeMessage.js'
import store from 'stores/Store';



/*import store from 'stores/CommentStore';*/


const Container = () => {
	return (
		<div>
			<HeaderContainer />
			<TaskList />
			<ChangeMessage />
		</div>
	);
}



const render = () => {
	ReactDOM.render( <Container></Container>,
		document.getElementById('app')
	);
}

render();

store.subscribe(render);