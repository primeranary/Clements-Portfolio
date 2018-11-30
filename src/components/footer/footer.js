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
            <ul className="copyright">
              <li>© Copyright 2014 CeeVee</li>
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