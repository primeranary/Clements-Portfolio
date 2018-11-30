import React, { Component } from 'react';
export class Footer extends Component {
  render() {
    return (
      <React.Fragment>
  {/* footer
   ================================================== */}
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-skype" /></a></li>
              <li><a href="#"><i className="fa fa-github" /></a></li>

            </ul>
            <ul className="copyright">
              <li>© Copyright 2014 CeeVee</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}
export default Footer;