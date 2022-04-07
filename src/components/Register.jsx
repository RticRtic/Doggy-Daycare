import React, { useEffect, useState } from "react";

const Register = ({ data }) => {
  const [registerDog, setRegisterDog] = useState([]);
  const [inputTextName, setInputTextName] = useState("");
  const [inputTextSex, setInputTextSex] = useState("");
  const [inputTextAge, setInputTextAge] = useState("");
  const [inputTextBreed, setInputTextBreed] = useState("");
  const [inputTextChipnumber, setInputTextChipnumber] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [present, setPresent] = useState(null);
  const [inputTextOwner, setInputTextOwner] = useState("");

  // const [newDogName, setNewDogName] = useState([]);

  useEffect(() => {}, []);

  const inputHandlerName = (e) => {
    console.log(e.target.value);
    setInputTextName(e.target.value);
  };

  const inputHandlerSex = (e) => {
    console.log(e.target.value);
    setInputTextSex(e.target.value);
  };
  const inputHandlerAge = (e) => {
    console.log(e.target.value);
    setInputTextAge(e.target.value);
  };

  const inputHandlerBreed = (e) => {
    console.log(e.target.value);
    setInputTextBreed(e.target.value);
  };

  const inputHandlerChipnumber = () => {
    let chipNumber = Math.random() * 1000;
    setInputTextChipnumber(chipNumber);
  };

  const inputHandlerImg = (img) => {
    console.log(img.target.value);
    setInputImg(img.target.value);
    // https://www.stromsund.se/images/18.35ea2b6c15b378d786812dac/1491287315926/Katt.jpg
  };

  const presentHandler = (e) => {
    if (e.target.value === "YES") {
      setPresent(true);
    }
    else if (e.target.value === "NO") {
        setPresent(false);
    } 
    
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setRegisterDog([
      ...registerDog,
      {
        name: inputTextName,
        sex: inputTextSex,
        age: inputTextAge,
        breed: inputTextBreed,
        chipNumber: inputTextChipnumber,
        img: inputImg,
        present: present,
      },
    ]);
    setInputTextName("");
    setInputTextSex("");
    setInputTextAge("");
    setInputTextBreed("");
    setInputTextChipnumber("");
    setPresent("");
  };

  const newDogInfo = registerDog.map((dog) => (
    <div className="newDogItem">
      <div className="newDogName"> Name: {dog.name}</div>
      <div className="newDogSex">Sex: {dog.sex}</div>
      <div className="newDogAge">Age: {dog.age}</div>
      <div className="newDogBreed">Breed: {dog.breed}</div>
      <div className="newDogChipNumber">Chipnumber: {dog.chipNumber} </div>
      <img className="newDogImg" src={dog.img} alt="img" />
      <div className="newDogPresent">Present: {dog.present.toString()}</div>
    </div>
  ));

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
        <input placeholder="Name Of The Owner"></input>
        <input placeholder="Phonenumber"></input>
      </div>

      <button onClick={submitHandler} className="submitButton">
        Submit
      </button>

      <div>{newDogInfo}</div>
    </div>
  );
};

export default Register;
