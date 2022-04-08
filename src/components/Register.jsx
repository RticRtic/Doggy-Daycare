import React, { useEffect, useState } from "react";

// import Welcome from "./components/Welcome";

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
  const [checkPresent, setCheckPresent] = useState(false);
  const [inputTextOwner, setInputTextOwner] = useState("");
  const [inputTextPhonenumber, setInputTextPhonenumber] = useState("");


  //States for checking if the inputfield have an value
  // const [checkInputValueName, setCheckInputValueName] = useState(false);
  // const [checkInputValueSex, setCheckInputValueSex] = useState(false);
  // const [checkInputValueAge, setCheckInputValueAge] = useState(false);
  // const [checkInputValueBreed, setCheckoutInputValueBreed] = useState(false);
  // const [checkInputValueChipnumber, setCheckInputValueChipnumber] = useState(false);
  // const [checkInputValueImg, setCheckInputValueImg] = useState(false);
  // const [checkInputValuePresent, setCheckInputValuePresent] = useState(false);
  // const [checkInputValueOwnerName, setCheckInputValueOwnerName] = useState(false);
  // const [checkInputValuePhonenumber, setCheckInputValuePhonenumber] = useState(false);



  useEffect(() => {
    
  }, [
    // checkInputValueName,
    // checkInputValueSex,
    // checkInputValueAge,
    // checkInputValueBreed,
    // checkInputValueChipnumber,
    // checkInputValueImg,
    // checkInputValuePresent,
    // checkInputValueOwnerName,
    // checkInputValuePhonenumber
  ]);

  //handlers for adding new dog
  const inputHandlerName = (e) => {
    setInputTextName(e.target.value);
    //checking if inputfield have an value.
  
    //setCheckInputValueName(true);
  };

  const inputHandlerSex = (e) => {
    setInputTextSex(e.target.value);
    //setCheckInputValueSex(true);
  };
  const inputHandlerAge = (e) => {
    setInputTextAge(e.target.value);
    //setCheckInputValueAge(true);
  };

  const inputHandlerBreed = (e) => {
    setInputTextBreed(e.target.value);
    //setCheckoutInputValueBreed(true);
  };

  const inputHandlerChipnumber = () => {
    let chipNumber = Math.random() * 1000;
    setInputTextChipnumber(chipNumber);
   //setCheckInputValueChipnumber(true);
  };

  const inputHandlerImg = (img) => {
    setInputImg(img.target.value);
    //setCheckInputValueImg(true);
    // https://www.stromsund.se/images/18.35ea2b6c15b378d786812dac/1491287315926/Katt.jpg
  };

  const presentHandler = (e) => {
    setPresent(e.target.value);
    if (e.target.value === "YES" || e.target.value === "yes") {
      setCheckPresent(true);
      //setCheckInputValuePresent(true);
    } else if (e.target.value === "NO" || e.target.value === "no") {
      setCheckPresent(false);
      //setCheckInputValuePresent(true);
    }
  };

  const inputHandlerOwner = (e) => {
    setInputTextOwner(e.target.value);
    //setCheckInputValueOwnerName(true);
  };

  const inputHandlerPhonenumber = (e) => {
    setInputTextPhonenumber(e.target.value);
    //setCheckInputValuePhonenumber(true)
    setSubmitButtonIsActive(false)
  };

  //handler for check if every inputfield have an value
  // const inputValueHandler = () => {
  //   if (
  //     checkInputValueName &&
  //     checkInputValueSex &&
  //     checkInputValueAge &&
  //     checkInputValueBreed &&
  //     checkInputValueChipnumber &&
  //     checkInputValueImg &&
  //     checkInputValuePresent &&
  //     checkInputValueOwnerName &&
  //     checkInputValuePhonenumber
  //   ) {
  //     setSubmitButtonIsActive(false);
  //     console.log("HEJ");
  //   }
  // };

  //add data from the inputfield to the dog state array.
  const submitHandler = (e) => {
    e.preventDefault();

    let newDog = {
      name: inputTextName,
      sex: inputTextSex,
      age: inputTextAge,
      breed: inputTextBreed,
      chipNumber: inputTextChipnumber,
      img: inputImg,
      present: checkPresent,
      owner: {
        lastName: "",
        name: inputTextOwner,
        phoneNumber: inputTextPhonenumber,
      },
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
  if (dog !== null) {
    newDogInfo = (
      <div className="new-dog-item">
        <div className="new-dog-name"> Name: {dog.name}</div>
        <div className="new-dog-sex">Sex: {dog.sex}</div>
        <div className="new-dog-age">Age: {dog.age}</div>
        <div className="new-dog-breed">Breed: {dog.breed}</div>
        <div className="new-dog-chipnumber">Chipnumber: {dog.chipNumber} </div>
        <img className="new-dog-img" src={dog.img} alt="img" />
        <div className="new-dog-present">Present: {dog.present.toString()}</div>
        <div className="new-dog-owner">Owner: {dog.owner.name}</div>
        <div className="new-dog-phonenumber">
          Phonenumber: {dog.owner.phoneNumber}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="register-header">Register Your Dog</h1>

      <div className="input-fields">
        <input
          className="input-text-name"
          value={inputTextName}
          onChange={inputHandlerName}
          placeholder={submitButtonIsActive ? "Name" : "Need dogs name"}
        ></input>
        <input
          className="input-text-sex"
          value={inputTextSex}
          onChange={inputHandlerSex}
          placeholder={submitButtonIsActive ? "Sex" : "Need gender"}
        ></input>
        <input
          className="input-text-age"
          value={inputTextAge}
          onChange={inputHandlerAge}
          placeholder={submitButtonIsActive ? "Age" : "Need age"}
        ></input>
        <input
          className="input-text-breed"
          value={inputTextBreed}
          onChange={inputHandlerBreed}
          placeholder={submitButtonIsActive ? "Breed" : "Need breed"}
        ></input>
        <input
          className="input-text-chipnumber"
          value={inputTextChipnumber}
          onChange={inputHandlerChipnumber}
          placeholder={submitButtonIsActive ? "Press any key" : "Need value"}
        ></input>
        <input
          className="input-img"
          value={inputImg}
          onChange={inputHandlerImg}
          placeholder={submitButtonIsActive ? "Img-(URL)" : "Need img Url"}
        ></input>
        <input
          className="input-text-present"
          value={present}
          onChange={presentHandler}
          placeholder={submitButtonIsActive ? "YES/NO" : "Need present YES/NO"}
        />
        <input
          className="input-text-owner"
          value={inputTextOwner}
          onChange={inputHandlerOwner}
          placeholder={
            submitButtonIsActive ? "Name of the owner" : "Need owners name"
          }
        ></input>
        <input
          className="input-text-phonenumber"
          value={inputTextPhonenumber}
          onChange={inputHandlerPhonenumber}
          placeholder={
            submitButtonIsActive ? "phonenumber" : "Need phonenumber"
          }
        ></input>
      </div>

      <button
        className="submit-button"
        disabled={submitButtonIsActive}
        onClick={submitHandler}
      >
        {submitButtonIsActive ? "Fill in all fields to submit" : "Submit"}
      </button>

      <div className="new-dog-list">{newDogInfo}</div>
    </div>
  );
};

export default Register;
