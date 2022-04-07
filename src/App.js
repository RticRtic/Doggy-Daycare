import "./App.css";

import ApiKey from "./components/ApiKey";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Info from "./components/Info";
import dogLogo from "./img/dog-logo.jpeg";
import { useEffect, useState } from "react";

function App() {
  const WELCOME = "welcome";
  const REGISTER = "register";
  const INFO = "info";

  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    getData();
  },[]);

  let content = null;

  switch (currentScreen) {
    case WELCOME:
      content = (
        <Welcome
          registerScreen={() => setCurrentScreen(REGISTER)}
          infoScreen={() => setCurrentScreen(INFO)}
        />
      );
      break;

    case REGISTER:
      content = <Register />;
      break;

    default:
        content = <Info data = {data}/>
      
      
  }



  const getData = async () => {
    const respone = await fetch(
      `https://api.jsonbin.io/b/624bfef1d96a510f029144e4`
    );
    const data = await respone.json();
    setData(data);
    console.log(data);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Doggy Daycare!</h1>
        <img className="dog-logo" src={dogLogo} alt="dogLogo" />
      </header>

      <main>{content}</main>

    </div>
  );
}

export default App;
