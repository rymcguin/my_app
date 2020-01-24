import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';


class Home extends Component {
	render(){
		return(
			<div style={{width:'100%', margin:'auto'}}>
				<Grid className='home-grid'>
					<Cell col={12}>
					<div className='home-bio'>
						<div className='home-img'>
							<img src="img_profile.jpg" alt='profile img'/>
						</div> 
						<h1 className='home-name'>Ryan C. McGuiness</h1>
						<hr/>
						<p>Computer Science Engineer / Economist </p>
					</div>
					<div className='home-text'>
						<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! I am currently a student at Lehigh University persuing 
							a major in both Economics and Computer Science. I am interested in finding
							creative and efficient solutions to the problems the world 
							gives us on a daily basis. I am eager to learn and I am constantly trying to improve myself
							every day. 

						</p>
					</div>
					</Cell>
				</Grid>
			</div>
			
		)
	}
}

export default Home;