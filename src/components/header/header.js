import React, { Component } from 'react';
 export class Header extends Component {
  render() {
    let ResumeData = this.props.ResumeData;

   return (
    <React.Fragment>
 <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {ResumeData.name}</h1>
            <h3>I'm a {ResumeData.role}</h3>
            <hr />
            <ul className="social">
              
              <li><a href="https://www.linkedin.com/in/clement-ojie-01b134165/" target = "_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/primeranary" target = "_blank"><i className="fa fa-github" /></a></li>

            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header> {/* Header End */}
      </React.Fragment>
    );
  }
}

export default Header;