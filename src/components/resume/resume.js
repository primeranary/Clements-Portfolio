import React, { Component } from 'react';
export class Resume extends Component {
  render() {
    return (
      <React.Fragment>
       {/* Resume Section
   ================================================== */}
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
              <h3>WILMINGTON UNIVERSITY</h3>
                <p className="info">B.A in Liberal Studies<span>•</span> <em className="date">May 2018</em></p>
                
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
          <div className="row item">
          <div className="twelve columns">
                <h3>ZIP CODE WILMINGTON</h3>
                <p className="info">STUDENT SOFTWARE DEVELOPER <span>•</span> <em className="date">May 2018 - November 2018</em></p>
                <p>
                ● Completed over 800 hours of software development projects and training over the span of 12 weeks 
                </p>
                <p>
                ● Selected from over 350 applicants for admission in a class of 38 students                </p>
                <p>
                ● Worked 80+ hours per week while gaining experience in:            
                </p>
                        <p>* Core Java principles</p> 
                        <p>* Object Oriented Programming</p>
                        <p>* Pair coding</p>
                        <p>* Agile and Scrum methodologies</p>
                        <p>* Testing and Debugging code</p>
                        <p>* Mentored by software developers from area companies</p>
              </div>
              </div> {/* item end */}

          <div className="row item">
              <div className="twelve columns">
                <h3>BISANZ AGENCY</h3>
                <p className="info">SALES SPECIALIST <span>•</span> <em className="date">August 2017 - November 2017</em></p>
                <p>
                ● Partnered with Delaware Teamsters unions to enroll members in universal life insurance coverage
                </p>
                <p>
                ● Trained new specialists in methods for selling supplemental benefits and helped prepare new specialists for their insurance certification tests
                </p>
                <p>
                ● Enrolled families in life insurance policies valued at $150,000+
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>CITIBANK</h3>
                <p className="info">DATA ENTRY AND BATCHING INTERN <span>•</span> <em className="date">March 2017 - July 2017</em></p>
                <p>
                ● Reviewed over 1,000 client documents weekly to ensure adherence to firm and regulatory policies and spearheaded the verification of document assessment logs before final processing
                </p>
                <p>  
                ● Created, maintained, and validated database of over 2,000 classified client documents on the passport applications team
                </p>
                <p>  
                ● Earned Top Performer award for surpassing metrics set forth by management
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Below show each skill that I have developed, as well as the proficiency of each one at this current time.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand java" /><em>Java</em></li>
                <li><span className="bar-expand junit" /><em>Junit</em></li>
                <li><span className="bar-expand sql" /><em>MySQL</em></li>
                <li><span className="bar-expand spring" /><em>Spring</em></li>               
                <li><span className="bar-expand git" /><em>Git</em></li>
                <li><span className="bar-expand hibernate" /><em>Hibernate</em></li>
                <li><span className="bar-expand maven" /><em>Maven</em></li>
                <li><span className="bar-expand react" /><em>React</em></li>
                <li><span className="bar-expand jScript" /><em>Javascript</em></li>
                <li><span className="bar-expand angular" /><em>Angular</em></li>

              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
export default Resume;