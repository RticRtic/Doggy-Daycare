import "./App.css";

import ApiKey from "./components/ApiKey";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Info from "./components/Info";
import dogLogo from "./img/dog-logo.jpeg";
import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ShowDog from "./components/ShowDog"

function App() {
  // const WELCOME = "welcome";
  // const REGISTER = "register";
  // const INFO = "info";

  //const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [data, setData] = useState([]);
  const [showDog, setShowDog] = useState([]);

  
  

  useEffect(() => {
    getData();
  }, []);

  // select Screen

  //let content = null;

  // switch (currentScreen) {
  //   case WELCOME:
  //     content = (
  //       <Welcome
  //         registerScreen={() => setCurrentScreen(REGISTER)}
  //         infoScreen={() => setCurrentScreen(INFO)}
  //       />
  //     );
  //     break;

  //   case REGISTER:
  //     content = <Register data = {data} />;
  //     break;

  //   default:
  //       content = <Info data = {data}/>

  // }

  // Getting data from api and save it on localStorage
  const getData = async () => {
    console.log("apiData: ", data);

    if (localStorage.getItem("savedApiData") === null) {
      // localStorage.setItem("savedApiData", JSON.stringify([]));

      const respone = await fetch(
        `https://api.jsonbin.io/b/624bfef1d96a510f029144e4`
      );
      const data = await respone.json();
      setData(data);
      localStorage.setItem("savedApiData", JSON.stringify(data));
      console.log("saved apidata: ", data);
    } else {
      let apiDataLocal = JSON.parse(localStorage.getItem("savedApiData"));
      setData(apiDataLocal);
      console.log("local Saved apiData: ", apiDataLocal);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Doggy Daycare!</h1>
        <img className="dog-logo" src={dogLogo} alt="dogLogo" />
      </header>

      {/* <main>{content}</main> */}
      <main>
        <Router>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/register" element={<Register data={data} />} />
            <Route path="/info" element={<Info data={data} setShowDog={setShowDog} />} />
            <Route path="/showdog" element={<ShowDog data={data} showDog = {showDog} />}/>
            
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
