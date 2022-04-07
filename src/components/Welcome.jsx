import React from "react";
import dogLogo2 from "../img/dog-logo2.webp";

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
        <button className="register-button" onClick={registerScreen}>Register Dog</button>
        <button className="info-button" onClick={infoScreen}>Dogs</button>
      </div>


      <img className="welcome-dog-logo" src={dogLogo2} alt="dogLogo2" />







    </div>
  );
};

export default Welcome;
