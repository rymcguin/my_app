import React, {Component} from 'react';
//import '../compCSS/contact.css';

class Contact extends Component {
	render(){
		return(
			<div className='contact-main'>
				<h1>Contact Information:</h1>
				<hr/>
				<div className='contact-list'>
					<ul>
						
						<p style={{fontSize:'25px'}}><strong>Phone:</strong> 732-675-8146</p>		
						<p style={{fontSize:'25px'}}>
						<strong>Personal Email:</strong>
						<a href = "mailto: ryanmcguiness123@gmail.com" className='email1'style={{paddingLeft:'10px'}}>ryanmcguiness123@gmail.com</a>
						</p>

						<p style={{fontSize:'25px'}}>
							<strong>School Email:</strong> 
							<a href = "mailto: rcm421@lehigh.edu" className='email2' style={{paddingLeft:'10px'}}>rcm421@lehigh.edu</a>
						</p>
	
						<div className='contact-links'>
							{/* Linkedin */}
							<a href="https://www.linkedin.com/in/ryan-mcguiness-733265191/" rel="noopener norefferer" >
								<i className="fa fa-linkedin-square" aria-hidden="true"/>
							</a>
							{/* Github */}
							<a href="https://github.com/rymcguin" rel="noopener norefferer" >
								<i className="fa fa-github-square" aria-hidden="true"/>
							</a>
					
						</div>
					</ul>
				</div>
			</div>
			
		)
	}
}

export default Contact;