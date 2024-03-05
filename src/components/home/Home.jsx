import React from 'react';
import Josh from '../../assets/josh.png'; // Corrected import path

const Home = () => {
  return (
    <div className="row justify-content-center align-items-center" style={{ minHeight: "70vh" }}>
      <div className="col-3 p-4">
        <img src={Josh} alt="Your Image" style={{ width: '200px', marginBottom: '20px' }} /> {/* Use imported image variable */}
      </div>
      <div className="col-3 p-4">
        Hello! I am a learning developer that lives in the Dallas, Tx area. I like to read, play chess, spend time with my family and ride my motorcycle. I have been married to my wife for 8 years and have a two-year-old son. I hope to gain more experience in learning all the languages to be a good developer. I have spent the past three years using a CMS to build websites for clients. It started to intrigue my interest for learning the code behind the design, so I signed up for class to learn more.
      </div>
    </div>
  );
}

export default Home;
