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
  // const [localApiData, setLocalApiData] = useState([]);

  // useEffect(() => {
  //   getLocalSavedData();
  // },[])
 
  useEffect(() => {
    getData();
  },[]);

// select Screen

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
      content = <Register data = {data} />;
      break;

    default:
        content = <Info data = {data}/>
      
      
  }

// Getting data from api and save it on localStorage

  const getData = async () => {
    // const respone = await fetch(
    //   `https://api.jsonbin.io/b/624bfef1d96a510f029144e4`
    // );
    // const data = await respone.json();
    // setData(data);
    console.log("apiData: ", data);

    
      // localStorage.setItem("savedApiData", JSON.stringify(data));
      // console.log("saved apidata: ", data);

      
      if(localStorage.getItem("savedApiData") === null) {
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

  // const savedApiData = () => {
  //   localStorage.setItem("savedApiData", JSON.stringify(data));
  // }

  // const getLocalSavedData = () => {
  //   if(localStorage.getItem("savedApiData") === null) {
  //     localStorage.setItem("savedApiData", JSON.stringify([]));

  //   } else {
  //     let apiDataLocal = JSON.parse(localStorage.getItem("savedApiData"));
  //     setData(apiDataLocal);
  //     console.log("local Saved apiData: ", apiDataLocal);
  //   }
  // }

  

  //   const saveLocalTodos = () => {
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// const getLocalTodos = () => {
//   if(localStorage.getItem("todos") === null) {
//     localStorage.setItem("todos", JSON.stringify([]));

//   } else {
//     let todoLocal = JSON.parse(localStorage.getItem("todos"));
//     setTodos(todoLocal);
//   }

// }

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
