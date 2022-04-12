import React from "react";
import dogLogo2 from "../img/dog-logo2.webp";
import {Link} from "react-router-dom"

const Welcome = ({ registerScreen, infoScreen }) => {

  


  return (
    <div>
      <header>

         {/* <img className="dog-logo" src={dogLogo} alt="dogLogo" /> */}

        <h2 className="start-info-text">
          Register new dog or get info about the dogs in the Daycare
        </h2>
      </header>

      <div className="welcome-buttons">
        {/* <button className="register-button" onClick={registerScreen}>Register Dog</button> */}
        <Link to="/register">
          <button className="register-button">Register Dog</button>
        </Link>
        <Link to="/info">
        <button className="info-button">Dogs</button>
        </Link>
        
      </div>


      <img className="welcome-dog-logo" src={dogLogo2} alt="dogLogo2" />







    </div>
  );
};

export default Welcome;
