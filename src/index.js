import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Home from './page/home.js'
import Deal from './page/deal.js'
import CityList from './page/cityList/cityList.js'

import {Route,Switch,BrowserRouter} from 'react-router-dom';

class Index extends React.Component{
	render(){
		return (
			<BrowserRouter >
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/deal/:id" component={Deal} />
					<Route path="/cityList" component={CityList} >
					</Route>
					<Route path="/:city" component={Home} />
				</Switch>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
	<div> 
		  <Index />
	</div>,
	document.getElementById('root'));
registerServiceWorker();
