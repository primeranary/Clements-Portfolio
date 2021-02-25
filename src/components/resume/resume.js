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
                <p className="info">B.A in Liberal Studies</p>
                
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
                <h3>USLI</h3>
                <p className="info">SOFTWARE DEVELOPER <span>•</span> <em className="date">September 2019 - Present</em></p>
                <p>
                ● Created three underwriter-facing apps for client quote assessment that have yielded over $3M in premium since inception
                </p>
                <p>
                ● Designed and created a new submission workflow for web-based customer applications to restrict company risk based on the type quote created
                </p>
                <p>
                ● Refactored existing code by implementing command, generic, and singleton design patterns to facilitate the reusability of the architectural structure of new code in future implementations
                </p>
                <p>
                ● Partnered with seven product owners to better tailor business needs, while being in compliance with the systems existing architecture
                </p>
                <p>
                ● Mentored three developer trainees on project management best coding practices and fundamentals per company standard
                </p>
              </div>
              </div> {/* item end */}

           <div className="row item">
              <div className="twelve columns">
                <h3>USLI</h3>
                <p className="info">DEVELOPER TRAINEE <span>•</span> <em className="date">March 2019 - September 2019</em></p>
                <p>
                ● Apprenticed under senior developers and DBAs to learn best coding practices, as well as architectural fundamentals and database standards
                </p>
                <p>
                ● Debugged XML applications on a weekly basis to facilitate customer onboarding to our quoting platformnce certification tests
                </p>
                <p>
                ● Enhanced templates for our internal and web-based customer facing applications by improving the UI and UX
                </p>
                <p>
                ● Improved existing backend stored procedures in various standalone applications through indexing and using CTEs to increase speed by 5-10 seconds and reduce server stress by about 250,000 reads
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
          </div> {/* item end */}

          <div className="row item">
              <div className="twelve columns">
                <h3>ZIP CODE WILMINGTON</h3>
                                <p className="info">STUDENT SOFTWARE DEVELOPER <span>•</span> <em className="date">May 2018 - August 2018</em></p>
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
                <li><span className="bar-expand sql" /><em>MySQL</em></li>
                <li><span className="bar-expand cSharp" /><em>C Sharp</em></li>
                <li><span className="bar-expand html" /><em>HTML-CSHTML</em></li>
                <li><span className="bar-expand xml" /><em>XML</em></li>
                <li><span className="bar-expand VB" /><em>Visual Basic</em></li>
                <li><span className="bar-expand spring" /><em>Spring</em></li>
                <li><span className="bar-expand git" /><em>Git</em></li>
                <li><span className="bar-expand react" /><em>React</em></li>
                <li><span className="bar-expand jScript" /><em>Javascript</em></li>
                <li><span className="bar-expand junit" /><em>Junit</em></li>
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