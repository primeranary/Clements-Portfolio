import React, { Component } from 'react';
import {Header} from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import ResumeData from './resumeData';
import './App.css';

class App extends Component {
  render() {
    return (
       <div >
      <Header ResumeData={ResumeData} />
      <About />
      <Resume />
      <Contact />
      <Footer />

     </div>
   
    );
  }
}

export default App;
