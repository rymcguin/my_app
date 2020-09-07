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
                  <p>Double Major: Computer Science & Economics</p>
                  <ul className="edu-att">
                    <li>GPA:3.3/4.0</li>
                    <li>
                      <strong>CompSci: </strong>Software Engineering,
                      Programming & Data Structures, Systems Software,
                      Programming languages, Algorithms, and Computer
                      Organization/Architecture.
                    </li>
                    <li>
                      <strong>Economics: </strong>
                      Game Theory, Econometric Software, Statistical Methods,
                      Micro & Macro- Economic Analysis, Competitor & Market
                      Analysis, Money, Banking & Financial Markets.
                    </li>
                  </ul>
                </li>
                <li>
                  Christian Brothers Academy
                  <ul className="highschool">
                    <li>
                      <bold>SAT(1340/1600)</bold>- Math: 730 &
                      Reading/Writing:610{" "}
                    </li>
                    <li>
                      <bold>GPA</bold>: 3.7/4.0
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
                  Hayek.ai
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;Frontend Developer</p>
                  <ul className="work-att">
                    <li>
                      Assisted in the implementation of website components and
                      features. Leading the development of a React-Native
                      application to expand to Android and iOS platforms.
                    </li>
                    <li>
                      Evaluated UX and UI designs for technical feasibility.
                      Worked with a group to debug and redesign formatting and
                      logic inconsistencies
                    </li>
                  </ul>
                </li>
                <li>
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
                </li>
              </ul>
            </div>
            <div className="resume-extra">
              <h2>Skils and Cerifications</h2>
              <hr />
              <ul>
                <li>
                  <bold>Proficient: </bold>
                  <ul className="resume-lcc">
                    <li>
                      Java, JavaScript, C/C++, HTML/CSS, React, Node.js, SQL,
                      REST, Unix, Linux, Bash, and Git
                    </li>
                  </ul>
                </li>
                <li>
                  <bold>Comfortable</bold>
                  <ul className="resume-lcc">
                    <li>
                      C#, Rust, Racket, PostgresSQL, React-Native, GatsbyJS,
                      GraphQL, Express.js, Google Firebase
                    </li>
                  </ul>
                </li>
                <li>
                  <bold>The Complete Web-Developer Course</bold> Udemy(2020)
                </li>
                <br />
                <li>
                  <bold>Ract Neative the Practical Guide</bold> Udemy(2020)
                </li>
				<br />
              </ul>
            </div>
            <div className="resume-extra">
              <h2>Extracurriculars, Interests, and Skills</h2>
              <hr />
              <ul>
                <li>
                  Lehigh Coding Community
                  <p>Executive Board Member</p>
                  <ul className="resume-lcc">
                    <li>
                      Attended and help tutor at weekly meetings called "Coding
                      Hours" where students taking computer science classes
                      could come and recieve help on their homework.
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
                  <bold>Hobbies:</bold> Chess, Reading, Golf, Snowboarding, and
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
