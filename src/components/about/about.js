import React, { Component } from 'react';
export class About extends Component {
  render() {
    return (
      <React.Fragment>
        {/* About Section
   ================================================== */}
      <section id="about">
        <div className="row">
          
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p> Outgoing and headstrong individual with a love for coding and problem solving. Involved in and graduated rigorous 12 week coding bootcamp at Zip Code Wilmington. Graduate from Wilmington University with a Bachelors in Liberal Studies. Learned the core concepts of Java, Test Driven Development,
                and also was exposed to technologies such as C#, VB.Net, and SQL.
            </p>
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}
export default About