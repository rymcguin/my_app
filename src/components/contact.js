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
						
						<li className='contact-phone'>Phone: 732-675-8146</li>
						<li className='contact-email'> Email:
							<ul>
								<li className='contact-email1'>
									<a href = "mailto: ryanmcguiness123@gmail.com" className='email1'>ryanmcguiness123@gmail.com</a>
								</li>
								<li className='contact-email2'>
									<a href = "mailto: rcm421@lehigh.edu" className='email2'>rcm421@lehigh.edu</a>
								</li>
								
							</ul>
						</li>
						<div className='contact-links'>
							{/* Linkedin */}
							<a href="https://www.linkedin.com/in/ryan-mcguiness-733265191/" rel="noopener norefferer" target="_blank">
								<i className="fa fa-linkedin-square" aria-hidden="true"/>
							</a>
							{/* Github */}
							<a href="https://github.com/rymcguin" rel="noopener norefferer" target="_blank">
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