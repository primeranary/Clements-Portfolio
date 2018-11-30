import React, { Component } from 'react';
export class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      {/* Contact Section
   ================================================== */}
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
          
          </div>
        </div>
        <div className="row">
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Clement Ojie <br />
                cojie48@gmail.com<br />
                <span>(302) 784-5442</span>
              </p>
            </div>
            <div className="widget widget_tweets">
              
            </div>
          </aside>
        </div>
      </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}

export default Contact;