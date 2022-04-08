import React, { useEffect, useState } from "react";

const Register = ({ data }) => {
  const [dog, setDog] = useState(null);

  const [submitButtonIsActive, setSubmitButtonIsActive] = useState(true);
  const [inputTextName, setInputTextName] = useState("");
  const [inputTextSex, setInputTextSex] = useState("");
  const [inputTextAge, setInputTextAge] = useState("");
  const [inputTextBreed, setInputTextBreed] = useState("");
  const [inputTextChipnumber, setInputTextChipnumber] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [present, setPresent] = useState("");
  const [inputTextOwner, setInputTextOwner] = useState("");
  const [inputTextPhonenumber, setInputTextPhonenumber] = useState("");

  useEffect(() => {}, []);

  //handlers for adding new dog
  const inputHandlerName = (e) => {
    setInputTextName(e.target.value);
   
  };
  
  const inputHandlerSex = (e) => {
    setInputTextSex(e.target.value);
  };
  const inputHandlerAge = (e) => {
    setInputTextAge(e.target.value);
  };

  const inputHandlerBreed = (e) => {
    setInputTextBreed(e.target.value);
  };

  const inputHandlerChipnumber = () => {
    let chipNumber = Math.random() * 1000;
    setInputTextChipnumber(chipNumber);
  };

  const inputHandlerImg = (img) => {
    setInputImg(img.target.value);
    // https://www.stromsund.se/images/18.35ea2b6c15b378d786812dac/1491287315926/Katt.jpg
  };

  const presentHandler = (e) => {
    if (e.target.value === "YES" || e.target.value === ("yes")) {
      setPresent(true);
    } else if (e.target.value === "NO" || e.target.value === "no") {
      setPresent(false);
    }
    
    
  };

  const inputHandlerOwner = (e) => {
    setInputTextOwner(e.target.value);
  };

  const inputHandlerPhonenumber = (e) => {
    setInputTextPhonenumber(e.target.value);
    setSubmitButtonIsActive(false);
  };

  //add data from the inputfield to the registerDog state array.
  const submitHandler = (e) => {

    e.preventDefault();

    let newDog = 
      {
        name: inputTextName,
        sex: inputTextSex,
        age: inputTextAge,
        breed: inputTextBreed,
        chipNumber: inputTextChipnumber,
        img: inputImg,
        present: present,
        owner: inputTextOwner,
        phoneNumber: inputTextPhonenumber,
      };

      setDog(newDog);
      data.push(newDog);
    

    //clearing the inputFields after submitted.
    setInputTextName("");
    setInputTextSex("");
    setInputTextAge("");
    setInputTextBreed("");
    setInputTextChipnumber("");
    setInputImg("");
    setPresent("");
    setInputTextOwner("");
    setInputTextPhonenumber("");

    localStorage.setItem("savedApiData", JSON.stringify(data));
  };

  //showing the new dog on the screen.
  let newDogInfo = null;
  if(dog !== null) {
       newDogInfo =  (
      <div className="newDogItem">
        <div className="newDogName"> Name: {dog.name}</div>
        <div className="newDogSex">Sex: {dog.sex}</div>
        <div className="newDogAge">Age: {dog.age}</div>
        <div className="newDogBreed">Breed: {dog.breed}</div>
        <div className="newDogChipNumber">Chipnumber: {dog.chipNumber} </div>
        <img className="newDogImg" src={dog.img} alt="img" />
        <div className="newDogPresent">Present: {dog.present.toString()}</div>
        <div className="newDogOwner">Owner: {dog.owner}</div>
        <div className="newDogPhonenumber">Phonenumber: {dog.phoneNumber}</div>
      </div>
    );

  }
 
  

  return (
    <div>
      <h1>Register Your Dog</h1>

      <div className="input">
        <input
          value={inputTextName}
          onChange={inputHandlerName}
          placeholder="Name"
        ></input>
        <input
          value={inputTextSex}
          onChange={inputHandlerSex}
          placeholder="Sex"
        ></input>
        <input
          value={inputTextAge}
          onChange={inputHandlerAge}
          placeholder="Age"
        ></input>
        <input
          value={inputTextBreed}
          onChange={inputHandlerBreed}
          placeholder="Breed"
        ></input>
        <input
          value={inputTextChipnumber}
          onChange={inputHandlerChipnumber}
          placeholder="Chipnnumber"
        ></input>
        <input
          value={inputImg}
          onChange={inputHandlerImg}
          placeholder="Image (Url)"
        ></input>
        <input
          value={present}
          onChange={presentHandler}
          placeholder="Present YES/NO"
        />
        <input
          value={inputTextOwner}
          onChange={inputHandlerOwner}
          placeholder="Name Of The Owner"
        ></input>
        <input
          value={inputTextPhonenumber}
          onChange={inputHandlerPhonenumber}
          placeholder="Phonenumber"
        ></input>
      </div>

      <button disabled={submitButtonIsActive} onClick={submitHandler} className="submitButton">
        Submit
      </button>

      <div>{newDogInfo}</div>
    </div>
  );
};

export default Register;
