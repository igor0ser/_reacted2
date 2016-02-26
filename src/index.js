require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from 'components/HeaderContainer.js'
import TaskList from 'components/TaskList.js'
import store from 'stores/TodoStore';



/*import store from 'stores/CommentStore';*/


const Container = () => {
	return (
		<div>
		<HeaderContainer></HeaderContainer>
		<TaskList></TaskList>
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