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
              <div className="twelve columns">
              <h3>Zip Code Wilmington</h3>
                <p className="info">Certificate of Completion in Software Development Training <span>•</span> <em className="date">August 2018</em></p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
              <h3>Wilmington University</h3>
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
                <h3>Bisanz Agency</h3>
                <p className="info">Sales Specialist <span>•</span> <em className="date">August 2017 - November 2017</em></p>
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
              <div className="twelve columns">
                <h3>CitiBank</h3>
                <p className="info">Data Entry and Batching Intern <span>•</span> <em className="date">March 2017 - July 2017</em></p>
                <p>
                ● Reviewed over 1,000 client documents weekly to ensure adherence to firm and regulatory policies and spearheaded the verification of document assessment logs before final processing
              </p>
              <p>  ● Created, maintained, and validated database of over 2,000 classified client documents on the passport applications team
                </p>
                <p>  ● Earned Top Performer award for surpassing metrics set forth by management
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
            <p>Below show each skill that I had developed, as well as the proficiency of each one at tis current time.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand java" /><em>Java</em></li>
                <li><span className="bar-expand spring" /><em>Spring</em></li>
                <li><span className="bar-expand junit" /><em>Junit</em></li>
                <li><span className="bar-expand sql" /><em>MySQL</em></li>
                <li><span className="bar-expand react" /><em>React</em></li>
                <li><span className="bar-expand git" /><em>Git</em></li>
                <li><span className="bar-expand jScript" /><em>Javascript</em></li>

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