import React from 'react';

import './home.css'; 
import invoicinator3000 from '../../assets/Invoicinator3000/invoicnator3000.png';
import invoicinator3000dash from '../../assets/Invoicinator3000/Dashboard.png';
import invoicinator3000info from '../../assets/Invoicinator3000/Info.png';
import invoicinator3000profile from '../../assets/Invoicinator3000/profile.png';
import invoicinator3000email from '../../assets/Invoicinator3000/email.png';
import invoicinator from '../../assets/Invoicinator/invoicinator.png';
import invoicinatorLogin from '../../assets/Invoicinator/login.png';
import invoicinatorCreateInvoices from '../../assets/Invoicinator/createinvoices.png';
import invoicinatorInvoices from '../../assets/Invoicinator/invoices.png';
import radiantHome from '../../assets/RadiantOasis/home.png'
import radiantBooking from '../../assets/RadiantOasis/booking.png'
import radiantChatbot from '../../assets/RadiantOasis/chatbot.png'
import fourHome from '../../assets/4D/home.png'
import fourRectangle from '../../assets/4D/rectangle.png'
import fourRound from '../../assets/4D/round.png'
import quizHome from '../../assets/quiz/home.png'
import quizFinish from '../../assets/quiz/finish.png'
import quizQuestion from '../../assets/quiz/question.png'
import quizScore from '../../assets/quiz/score.png'
import bulliesHome from '../../assets/Bullies/home.png'
import bulliesAdopt from '../../assets/Bullies/adopt.png'
import bulliesDogs from '../../assets/Bullies/dogs.png'
import weather from '../../assets/weather/weather.png'
import laughsVault from '../../assets/laughs/vault.png'
import laughsHome from '../../assets/laughs/home.png'
import cert from '../../assets/Cert.pdf'
import res from "../../assets/Resume.pdf"
import josh from "../../assets/josh.png"


const Home = () => {
  return (
    <div className='main-content'>

      <div className='about'>
      <img src={josh} alt="Josh" className="josh" />

      <h2>ABOUT ME</h2>

       <p> Hello! I am a developer that lives in the Dallas, Tx area. I like to read, play chess, spend time with my family and ride my motorcycle. I have been married to my wife for 8 years and have a two-year-old son. I have spent the past three years using a CMS to build websites for clients. It started to intrigue my interest for learning the code behind the design, so I signed up for class to learn more.</p>

<p> I hold a full stack coding certification from the University of Texas, where I gained extensive knowledge and hands-on experience with the MERN stack. Throughout the course, I developed skills in building and managing applications using MongoDB, Express.js, React, and Node.js. This comprehensive program provided me with a strong foundation in full stack development, equipping me with the tools and techniques needed to create robust, scalable web applications. </p>

      <div className='resume' >
      <a href={cert} target="_blank"> <button>View Certification</button> </a>
      <a href={res} target="_blank"> <button className='res' >View Resume</button> </a>
      </div>
     

      <h4>Technologies that I am familiar with</h4>

      <div className='technology-used'>
        <div className='list-1'>
        <p>- React</p>
        <p>- Vite</p>
        <p>- Mailjet</p>
        <p>- MongoDB</p>
        <p>- MySQL</p>
        <p>- API's</p>

        </div>
        <div className='list-2'>
        <p>- NodeJS</p>
        <p>- Bycrypt </p>
        <p>- GraphQL </p>
        <p>- Express </p>
        <p>- NoSQL </p>
        <p>- IndexedDB</p>
        </div>
        <div className='list-3'>
        <p>- Cloudinary </p>
        <p>- PWA </p>
        <p>- HTML</p>
        <p>- CSS</p>
        <p>- JavaScript</p>
        </div>
        </div>
      </div>

      

      <div className='projects' id='projects'>

{/* Project 1 */}

        <div className='invoicinator3000 card' id='invoicinator3000'>
          <div className='project-description'>
          <h2>
        Invoicinator 3000
       </h2>
       <p>
       This application was originally called Invoicinator and was developed by a team in my class. I redesigned it using React, transforming it into a fully Progressive Web Application (PWA) for managing invoices with a seamless, offline-capable experience. It allows users to create, store, and manage invoices, and provides functionality to send them via email.
       </p>

       

       <a href="https://github.com/JoshRTheDeveloper/Invoicinator3000" target="_blank">
          <button>View on GitHub</button>
      </a>

      <a href="https://invoicinator3000-d580657ecca9.herokuapp.com" target="_blank">
          <button>View Deployment</button>
      </a>

              <h4>Impotrtant Technologies Used</h4>
        <div className='technology-used'>
        <div className='list-1'>
        <p>- React</p>
        <p>- Vite</p>
        <p>- Mailjet</p>
        <p>- MongoDB</p>

        </div>
        <div className='list-2'>
        <p>- NodeJS</p>
        <p>- Bycrypt </p>
        <p>- GraphQL </p>
        </div>
        <div className='list-3'>
        <p>- IndexedDB</p>
        <p>- Cloudinary </p>
        </div>
        </div>
            
          </div>




          <div className='project-img'>

          </div>
      <h4>Scroll right to left to see more</h4>
 
       <div className="scroll-container">
        <img src={invoicinator3000} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={invoicinator3000dash} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={invoicinator3000info} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={invoicinator3000profile} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={invoicinator3000email} alt="Invoicinator 3000" className="invoicinator3000-img" />
      </div>
        </div>

        {/* Project 2 */}

        <div className='invoicinator card' id='invoicinator'>
          <div className='project-description'>
          <h2>
        Invoicinator
       </h2>
       <p>
       The original invoicinator created by my team in class. Welcome to INVOICINATOR – the ultimate powerhouse for businesses to flex their invoicing muscles and dominate the professional landscape! It's time to terminate the tedious process of manual invoicing and embrace the future of dynamic, automated invoice creation.
       </p>
       
       <a href="https://github.com/AnthonyBuffill/invoicinator" target="_blank">
          <button>View on GitHub</button>
      </a>

      <a href="https://invoicinator-e5b9fce169c1.herokuapp.com/" target="_blank">
          <button>View Deployment</button>
      </a>

          </div>
        
          <h4>Impotrtant Technologies Used</h4>
            <div className='technology-used'>
            <div className='list-1'>
            <p>- Handlebars</p>
            <p>- MySQL</p>
            <p>- Express</p>
            <p>- MailJet</p>

            </div>
            <div className='list-2'>
            <p>- NodeJS</p>
            <p>- HTML </p>
            <p>- CSS </p>
            </div>
            <div className='list-3'>
            <p>- JS</p>
            </div>
            </div>

            <h4>
       My Role
       </h4>
       <p className='delete-marigin'>
       I learned the Mailjet technology and successfully incorporated it into our application. I also organized the initial file structure of our project and worked on the POST routes and JavaScript for the creation of the invoices.
       </p>
            <h4>Scroll right to left to see more</h4>
   
       <div className="scroll-container">
        <img src={invoicinator} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={invoicinatorLogin} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={invoicinatorCreateInvoices} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={invoicinatorInvoices} alt="Invoicinator 3000" className="invoicinator3000-img" />
      </div>
        </div>

        {/* Project 3 */}

        <div className='radiant-oasis card' id='radiant'>
          <div className='project-description'>
          <h2>
        Radiant Oasis Spa
       </h2>
       <p>
       Welcome to Radiant Spa Oasis! A Team Project.  A place to be treated and pampered to your hearts desire. This application will allow clients to learn about our spa, schedule bookings and see booking history!
       </p>
       
       <a href="https://github.com/Msteven5/Radiant-Oasis-Spa" target="_blank">
          <button>View on GitHub</button>
      </a>

      <a href="https://radiant-oasis-spa-4df905e0f97b.herokuapp.com/" target="_blank">
          <button>View Deployment</button>
      </a>

          </div>
        
          <h4>Impotrtant Technologies Used</h4>
            <div className='technology-used'>
            <div className='list-1'>
            <p>- React</p>
            <p>- GraphQL</p>
            <p>- Express</p>
            <p>- Vite</p>

            </div>
            <div className='list-2'>
            <p>- NodeJS</p>
            <p>- Bootstrap</p>
            <p>- Chatbot </p>
            </div>
            <div className='list-3'>
            <p>- JS</p>
            </div>
            </div>

            <h4>
       My Role
       </h4>
       <p className='delete-marigin'>
       I learned the Chatbot technology and successfully incorporated it into our application. I also organized the initial file structure of our project and worked on the auth, modals, models, schemas and resolvers.
       </p>
            <h4>Scroll right to left to see more</h4>
   
       <div className="scroll-container">
        <img src={radiantHome} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={radiantBooking} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={radiantChatbot} alt="Invoicinator 3000" className="invoicinator3000-img" />
      </div>
        </div>

         {/* Project 4 */}

         <div className='fourD card' id='fourD'>
          <div className='project-description'>
          <h2>
        Fourth Dimension
       </h2>
       <p>
       This is a simple Deployment that is mobile friendly. It is a Live site for displaying product information for a company. 
       </p>
       
      <a href="http://www.4di-inc.com" target="_blank">
          <button>View Deployment</button>
      </a>

          </div>
        
          <h4>Impotrtant Technologies Used</h4>
            <div className='technology-used'>
            <div className='list-1'>
            <p>- React</p>
            <p>- GraphQL</p>
            <p>- JS</p>
            <p>- CSS</p>

            </div>
            <div className='list-2'>
            <p>- NodeJS</p>
            <p>- HMTL</p>
         
            </div>
            </div>

            <h4>
       My Role
       </h4>
       <p className='delete-marigin'>
      I took a non-mobile friendly site built by hostgator and converted it to a React application. Rebuilt and designed it to display properly accoding to clients wishes. 
       </p>
            <h4>Scroll right to left to see more</h4>
   
       <div className="scroll-container">
        <img src={fourHome} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={fourRectangle} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={fourRound} alt="Invoicinator 3000" className="invoicinator3000-img" />
      </div>
        </div>

              {/* Project 5 */}

              <div className='bullies card' id='bullies'>
          <div className='project-description'>
          <h2>
       Bullies of Texas
       </h2>
       <p>
       This website is built using a Content Management System (CMS), enhanced with custom CSS and HTML to create a unique and responsive design. The site is live and allows users to browse through a curated list of dogs available for adoption. Each dog's profile includes detailed information. 
       </p>
       
      <a href="https://www.bulliesoftexas.com/" target="_blank">
          <button>View Deployment</button>
      </a>

          </div>
        
          <h4>Impotrtant Technologies Used</h4>
            <div className='technology-used'>
            <div className='list-1'>
            <p>- CMS</p>
            <p>- HTML</p>
            <p>- JS</p>
            <p>- CSS</p>

            </div>
           
            </div>

            <h4>
       My Role
       </h4>
       <p className='delete-marigin'>
       This website was designed to align with the client’s vision, involving communication and dedication to bring their ideas to life. To ensure the client’s needs were fully met, I maintained close collaboration throughout the project, adapting the design and functionality based on their feedback. 
       </p>
            <h4>Scroll right to left to see more</h4>
   
       <div className="scroll-container">
        <img src={bulliesHome} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={bulliesDogs} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={bulliesAdopt} alt="Invoicinator 3000" className="invoicinator3000-img" />
      </div>
        </div>

  {/* Project */}

  <div className='laughs card' id='laughs'>
          <div className='project-description'>
          <h2>
       Only Laughs
       </h2>
       <p>
       This website was a team project that was designed for a fun user friendly experience created to provide a spark of fun to your day. 
       </p>
       
      <a href="https://anthonybuffill.github.io/only-laughs/" target="_blank">
          <button>View Deployment</button>
      </a>

          </div>
        
          <h4>Impotrtant Technologies Used</h4>
            <div className='technology-used'>
            <div className='list-1'>
            <p>- HTML</p>
            <p>- JS</p>
            <p>- CSS</p>

            </div>
            <div className='list-1'>
            <p>- Joke API</p>
            <p>- Image API</p>

            </div>
           
            </div>

            <h4>
       My Role
       </h4>
       <p className='delete-marigin'>
       I researched and implemented the necessary APIs for my project. Using JavaScript, I created functionality that allows a random joke and image to be generated with the click of a button. Additionally, I ensured that each joke and image is saved to an archive for future reference.
       </p>
            <h4>Scroll right to left to see more</h4>
   
       <div className="scroll-container">
        <img src={laughsHome} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={laughsVault} alt="Invoicinator 3000" className="invoicinator3000-img" />

      </div>
        </div>


  {/* Project */}

  <div className='weather card' id='weather'>
          <div className='project-description'>
          <h2>
      Weather App
       </h2>
       <p>
      This app allows a user to check the weather of a city. When found the weather of the current day and forecast is displayed. The results are stored in local storage that will be pulled from if reloaded.

       </p>
       
      <a href="https://joshrthedeveloper.github.io/Weather-app/" target="_blank">
          <button>View Deployment</button>
      </a>

          </div>
        
          <h4>Impotrtant Technologies Used</h4>
            <div className='technology-used'>
            <div className='list-1'>
            <p>- HTML</p>
            <p>- JS</p>
       
            </div>
            <div className='list-2'>
            <p>- API</p>
            <p>- CSS</p>
            </div>
           
            </div>

            <h4>
       My Role
       </h4>
       <p className='delete-marigin'>
       This was built using modern web technologies and integrates seamlessly with a reliable weather API to provide accurate and up-to-date weather information for cities around the world. The app leverages the browser's Local Storage to store the names of searched cities. This allows users to quickly revisit the weather data of previously searched cities without needing to query the API again.
       </p>
            <h4>Scroll right to left to see more</h4>
   
       <div className="scroll-container">
        <img src={weather} alt="Invoicinator 3000" className="invoicinator3000-img" />
      </div>
        </div>


  {/* Project */}


  <div className='quiz card' id='quiz'>
          <div className='project-description'>
          <h2>
       Coding Quiz
       </h2>
       <p>
       This is a simple deployment of a quiz using Javascript for the main funtionality. 
       Allows a user to take a timed quiz and save the results. 
       </p>
       
      <a href="https://joshrthedeveloper.github.io/Code-quiz/" target="_blank">
          <button>View Deployment</button>
      </a>

          </div>
        
          <h4>Impotrtant Technologies Used</h4>
            <div className='technology-used'>
            <div className='list-1'>
           
            <p>- HTML</p>
            <p>- JS</p>
            <p>- CSS</p>

            </div>
        
            </div>

            
            <h4>Scroll right to left to see more</h4>
   
       <div className="scroll-container">
        <img src={quizHome} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={quizQuestion} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={quizFinish} alt="Invoicinator 3000" className="invoicinator3000-img" />
        <img src={quizScore} alt="Invoicinator 3000" className="invoicinator3000-img" />
      </div>
        </div>


      </div>

    </div>
  );
}

export default Home;
