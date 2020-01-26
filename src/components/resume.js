import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class Resume extends Component {
	render(){
		return(
			<div style={{width:'100%', margin:'auto'}}>
				<Grid className='resume-body'>
					<Cell col={12}>
						<h1>Resume</h1>
						<hr/>
						<div className='resume-edu'>
							<h2>Education</h2>
							<hr/>
							<ul>
								<li>Lehigh University
									<p>BA in Computer Science and Economics</p>
									
									<ul className='edu-att'>
										<li> Proficient in Java, C++, HTML/CSS, JavaScript, & React. Experienced with Frontend and Backend development.</li>
										<li> Well versed in the analysis of Macro and Micro economics, financial markets, and market competition.</li>
									</ul>
								</li>
								<li>Christian Brothers Academy
									<ul className='highschool'>
										<li><bold>SAT(1340/1600)</bold>- Math: 730 & Reading/Writing:610 </li>
										<li><bold>GPA</bold>: 3.7</li>
									</ul>

								</li>
							</ul>
						</div>
						<div className='resume-work'>
							<h2>Work Experience</h2>
							<hr/>
							<ul>
								<li>Due Process Stables, Golf Course
									<p>&nbsp;&nbsp;&nbsp;&nbsp;Golfshop Attendant</p>
									<ul className='work-att'>
										<li> Responsibilities included managing daily store operations, assisting club members 
											with store selections and purchases, attending to staff and member needs,
											 and maintaining overall store appearance and cleanliness.
										</li>
										<li>
											Maintained store inventory and supplies. Duties included the completion 
											of weekly inventory counts, contacting vendors, placing orders, tracking 
											shipments/deliveries, and organizing inventory. 
										</li>

									</ul>
								</li>
								<li>Colts Neck Fire Department 
									<p>&nbsp;&nbsp;&nbsp;&nbsp; Junior Volunteer Member</p>
									<ul className='work-fire'>
										<li>Monitored and maintained firefighting equipment including hoses, 
											extinguishers and protective equipment.</li>
										<li>Responded to emergency electronic alerts and assisted in the preparation
											of vehicles and equipment.</li>
									</ul>

								</li>
							</ul>
						</div>
						<div className='resume-extra'>
							<h2>Extracurriculars, Interests, and Skills</h2>
							<hr/>
							<ul>
								<li>Lehigh Coding Community
									<p>Executive Board Member</p>
									<ul className='resume-lcc'>
										<li>
											Attended and help tutor at weekly meetings called "Coding Hours" where students taking computer science classes
											could come and recieve help on their homework.
										</li>

									</ul>
									
								</li>
								<li>Philanthropy Chair
									<p>Delta Chi Fraternity</p>
									<ul className='resume-phil'>
										<li>Developed fun and creative ways to get the Lehigh community 
											together to raise money for the Jimmy V Foundation.
										</li>
										<li>
											Communicated with leaders of other organizations to ensure
											high attendance and participation.
										</li>
										<li>
											Helped organize the 2018 Lehigh Relay for Life event and helped 
											raise over $800 for cancer research.
										</li>
									</ul>
								</li>
								<li>
									<bold>Hobbies:</bold> Chess, Reading, Golf, Snowboarding, and Exercise 
								</li>
							</ul>
						</div>
					</Cell>
				</Grid>
				
			</div>
		)
	}
}

export default Resume;