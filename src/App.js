import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routes from './routes';

function App() {

	const showContentMenus = (routes) => {
		var result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}						
					/>
				)
			})
		}
		return <Switch>{result}</Switch>;
	}

	return (
		<Router>
			<div>
				<Menu />	
			</div>
			
			{showContentMenus(routes)}
		</Router>
	);
}

export default App;
