import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Projects from './projects';
import Contact from './contact';
import Resume from './resume';


const Main = () => (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route path="/home" component={Home}/>
		<Route path="/projects" component={Projects}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/resume" component={Resume}/>
	</Switch>
) 

export default Main;