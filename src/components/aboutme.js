import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
//import '../compCSS/aboutme.css';

class AboutMe extends Component {
	render() {
		return(
			<div style={{width:'100%', margin:'auto'}}>
				<Grid className='about-me-grid'>
					<Cell col={12}>
							<h1>About Me</h1>
							<hr></hr>

					</Cell>
				</Grid>
				
			</div>
		)
	}
}

export default AboutMe;