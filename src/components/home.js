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
						<p>Computer Science & Economics </p>
					</div>
					<div className='home-text'>
					{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
						<p> Hello! I am currently a student at Lehigh University pursuing 
							a double major in Economics and Computer Science. I am interested in finding
							creative and efficient solutions to meaningful and interesting problems. I am eager to learn 
							and constantly trying to improve myself. 
						</p>
					</div>
					</Cell>
				</Grid>
			</div>
			
		)
	}
}

export default Home;