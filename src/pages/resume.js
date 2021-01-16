import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="resume-body">
          <Cell col={12}>
            <h1>Resume</h1>
            <hr />
            <div className="resume-edu">
              <h2>Education</h2>
              <hr />
              <ul>
                <li>
                  Lehigh University
                  <p><strong>Double Major:</strong> Computer Science & Economics</p>
                  <p><strong>Graduation:</strong> May 2021</p>
                  <ul className="edu-att">
                    <li>GPA:3.3/4.0</li>
                    <li>
                      <strong>Computer Science Coursework: </strong>Software Engineering,
                      Programming & Data Structures, Systems Software,
                      Programming languages, Algorithms, and Computer
                      Organization/Architecture.
                    </li>
                    <li>
                      <strong>Economics Coursework: </strong>
                      Game Theory, Econometric Software, Statistical Methods,
                      Micro & Macro- Economic Analysis, Competitor & Market
                      Analysis, Money, Banking & Financial Markets.
                    </li>
                  </ul>
                </li>
                <li>
                  Self Learning
                  <ul className="highschool">
                    <li>
                    Lambda School User Experience and Design Bootcamp
                    </li>
                    <li>
                    The Complete Web Developer Bootcamp on Udemy (React, Node.js, Express.js, PostgreSQL)
                    </li>
                    <li>
                    The React Native Bootcamp on Udemy
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="resume-work">
              <h2>Work Experience</h2>
              <hr />
              <ul>
                <li>
                  Lapis Health
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Moblie App Devoloper Intern</p>
                  <ul className="work-att">
                    <li>
                    A mobile application available on both Android and iOS designed to assist users to change their daily routine to include more heart healthy habits.
                    </li>
                    <li>
                    Used the Flutter SDK and Dart programming language to improve the UI/UX design of the app. In extension, I also tested, fixed bugs, and maintained the application.
                    </li>
                    <li>
                    Led the development of Flutter Flavors and connected them to google Firebases, to provide multiple environments to develop and test in. Also developed and managed a Dark Mode feature.
                    </li>
                  </ul>
                </li>
                <li>
                  Hayek.ai
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Software Engineer Intern</p>
                  <ul className="work-att">
                    <li>
                    Online marketplace for investment research that makes professional-grade research accessible by giving analysts a platform to establish a track record and sell their research.
                    </li>
                    <li>
                    Assisted in building a production-grade React application using Redux for state management, Stripe for payments, Slate.js for rich-text editing, and the Material-UI library for component design and layout.
                    </li>
                    <li>
                    Helped build a well-tested, RESTful API using Python and Flask, with a PostgreSQL database.
                    </li>
                  </ul>
                </li>
                {/* <li>
                  Due Process Stables, Golf Course
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Golfshop Attendant</p>
                  <ul className="work-att">
                    <li>
                      {" "}
                      Responsibilities included managing daily store operations,
                      assisting club members with store selections and
                      purchases, attending to staff and member needs, and
                      maintaining overall store appearance and cleanliness.
                    </li>
                    <li>
                      Maintained store inventory and supplies. Duties included
                      the completion of weekly inventory counts, contacting
                      vendors, placing orders, tracking shipments/deliveries,
                      and organizing inventory.
                    </li>
                  </ul>
                </li>
                <li>
                  Colts Neck Fire Department
                  <p>&nbsp;&nbsp;&nbsp;&nbsp; Junior Volunteer Member</p>
                  <ul className="work-fire">
                    <li>
                      Monitored and maintained firefighting equipment including
                      hoses, extinguishers and protective equipment.
                    </li>
                    <li>
                      Responded to emergency electronic alerts and assisted in
                      the preparation of vehicles and equipment.
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
            <div className="resume-extra">
              <h2>Skills</h2>
              <hr />
              <ul>
                <li>
                  <strong>Proficient: </strong>
                  <ul className="resume-lcc">
                    <li>
                    Python, Java, JavaScript, HTML/CSS, React, React-Native, Flutter, Dart, Node.js, SQL
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Comfortable:</strong>
                  <ul className="resume-lcc">
                    <li>
                    C/C++, Rust, Racket, GatsbyJS, GraphQL, TypeScript
                    </li>
                  </ul>
                </li>
				<br />
              </ul>
            </div>
            <div className="resume-extra">
              <h2>Extracurriculars and Interests</h2>
              <hr />
              <ul>
                <li>
                  Lehigh Coding Community
                  <p>Executive Board Member</p>
                  <ul className="resume-lcc">
                    <li>
                    Hosted and helped tutor at weekly coding sessions. Assisted students with course selection, homework problems, test preparation, and personal projects.
                    </li>
                  </ul>
                </li>
                <li>
                  Philanthropy Chair
                  <p>Delta Chi Fraternity</p>
                  <ul className="resume-phil">
                    <li>
                      Developed fun and creative ways to get the Lehigh
                      community together to raise money for the Jimmy V
                      Foundation.
                    </li>
                    <li>
                      Communicated with leaders of other organizations to ensure
                      high attendance and participation.
                    </li>
                    <li>
                      Helped organize the 2018 Lehigh Relay for Life event and
                      helped raise over $800 for cancer research.
                    </li>
                  </ul>
                </li>
                <li className="resume-hobbies">
                  <strong>Hobbies:</strong> Chess, Reading, Golf, Snowboarding, and
                  Exercise
                </li>
              </ul>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
