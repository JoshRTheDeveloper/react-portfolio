import React from 'react';
import './about.css';
import Invoicinator from '../assets/invoicinator.png'
import noteTaker from '../assets/Note_taker.png'
import onlyLaughs from '../assets/onlylaughs.png'
import Weather from '../assets/Wheather.png'
import Scheduler from '../assets/Scheduler.png'
import textEditor from '../assets/text-editor.png'

const About = () => {
  return (
    <div>
      {/* First row */}
      <div className="row justify-content-center align-items-center my-5">
        <div className="col-4 p-4 position-relative" style={{ backgroundImage: `url('${Invoicinator}')`, backgroundSize: "cover", marginRight: "10px", height: "200px" }}>
          <div className="content-overlay">
            <h2>Invoicinator</h2>
            
            <a href="https://github.com/JoshRTheDeveloper/invoicinator">Github</a> 
            <br />
            <a href="https://invoicinator-e5b9fce169c1.herokuapp.com/dashboard">Deployment</a> 
          </div>
        </div>
        
        <div className="col-4 p-4 position-relative" style={{ backgroundImage: `url('${noteTaker}')`, backgroundSize: "cover", height: "200px" }}>
          <div className="content-overlay">
            <h2>Note Taker app</h2>
            <a href="https://github.com/JoshRTheDeveloper/Note-Taker?tab=readme-ov-file">Github</a> 
            <br />
            <a href="https://agile-journey-87487-f728fc2837d4.herokuapp.com/notes">Deployment</a> 
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-4 p-4 position-relative" style={{ backgroundImage: `url('${onlyLaughs}')`, backgroundSize: "cover", marginRight: "10px", height: "250px" }}>
          <div className="content-overlay">
            <h2>Only Laughs</h2>
            <a href="https://github.com/AnthonyBuffill/only-laughs">Github</a> 
            <br />
            <a href="https://anthonybuffill.github.io/only-laughs/">Deployment</a> 
          </div>
        </div>
        <div className="col-4 p-4 position-relative" style={{ backgroundImage: `url('${Weather}')`, backgroundSize: "cover", height: "250px" }}>
          <div className="content-overlay">
            <h2>Weather App</h2>
            
            <a href="https://github.com/JoshRTheDeveloper/Weather-app">Github</a> 
            <br />
            <a href="https://joshrthedeveloper.github.io/Weather-app/">Deployment</a> 
          </div>
        </div>
      </div>

      {/* Third row */}
      <div className="row justify-content-center align-items-center mb-4">
        <div className="col-4 p-4 position-relative" style={{ backgroundImage: `url('${Scheduler}')`, backgroundSize: "cover", marginRight: "10px", height: "300px" }}>
          <div className="content-overlay">
            <h2>Scheduler</h2>
            <a href="https://github.com/JoshRTheDeveloper/scheduler">Github</a> 
            <br />
            <a href="https://joshrthedeveloper.github.io/scheduler/">Deployment</a> 
          </div>
        </div>
        <div className="col-4 p-4 position-relative" style={{ backgroundImage: `url('${textEditor}')`, backgroundSize: "cover", height: "300px" }}>
          <div className="content-overlay">
            <h2>Text Editor</h2>
            <a href="https://github.com/JoshRTheDeveloper/text-editor">Github</a> 
            <br />
            <a href="https://textinator-01e87628162f.herokuapp.com/">Deployment</a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
