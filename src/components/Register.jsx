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
  const [checkInputValueName, setCheckInputValueName] = useState(false);
  const [checkInputValueSex, setCheckInputValueSex] = useState(false);
  const [checkInputValueAge, setCheckInputValueAge] = useState(false);
  const [checkInputValueBreed, setCheckoutInputValueBreed] = useState(false);
  const [checkInputValueChipnumber, setCheckInputValueChipnumber] =
    useState(false);
  const [checkInputValueImg, setCheckInputValueImg] = useState(false);
  const [checkInputValuePresent, setCheckInputValuePresent] = useState(false);
  const [checkInputValueOwnerName, setCheckInputValueOwnerName] =
    useState(false);
  const [checkInputValuePhonenumber, setCheckInputValuePhonenumber] =
    useState(false);

  useEffect(() => {
    inputValueHandler();
  }, [
    checkInputValueName,
    checkInputValueSex,
    checkInputValueAge,
    checkInputValueBreed,
    checkInputValueChipnumber,
    checkInputValueImg,
    checkInputValuePresent,
    checkInputValueOwnerName,
    checkInputValuePhonenumber,
  ]);

  //handlers for adding new dog
  const inputHandlerName = (e) => {
    setInputTextName(e.target.value);
    //checking if inputfield have an value.
    if (e.target.value !== "") {
      setCheckInputValueName(true);
    } else {
      setCheckInputValueName(false);
    }
  };

  const inputHandlerSex = (e) => {
    setInputTextSex(e.target.value);
    if (e.target.value !== "") {
      setCheckInputValueSex(true);
    } else {
      setCheckInputValueSex(false);
    }
  };
  const inputHandlerAge = (e) => {
    setInputTextAge(e.target.value);
    if (e.target.value !== "") {
      setCheckInputValueAge(true);
    } else {
      setCheckInputValueAge(false);
    }
  };

  const inputHandlerBreed = (e) => {
    setInputTextBreed(e.target.value);
    if (e.target.value !== "") {
      setCheckoutInputValueBreed(true);
    } else {
      setCheckoutInputValueBreed(false);
    }
  };

  const inputHandlerChipnumber = () => {
    let chipNumber = Math.random() * 1000;
    setInputTextChipnumber(chipNumber);
    setCheckInputValueChipnumber(true);
  };

  const inputHandlerImg = (img) => {
    setInputImg(img.target.value);
    if (img.target.value !== "") {
      setCheckInputValueImg(true);
    } else {
      setCheckInputValueImg(false);
    }

    // https://www.stromsund.se/images/18.35ea2b6c15b378d786812dac/1491287315926/Katt.jpg
  };

  const presentHandler = (e) => {
    setPresent(e.target.value);
    if (e.target.value === "YES" || e.target.value === "yes") {
      setCheckPresent(true);
     
      if (e.target.value !== "") {
        setCheckInputValuePresent(true);
      } else {
        setCheckInputValuePresent(false);
        setCheckPresent(false);
      }
      

    } else if (e.target.value === "NO" || e.target.value === "no") {
      setCheckPresent(false);
      if (e.target.value !== "") {
        setCheckInputValuePresent(true);
      } else {
        setCheckInputValuePresent(false);
        setCheckPresent(true);
      }
      
    }
    console.log(checkPresent, e.target.value);
    console.log(checkInputValuePresent);
  };

  const inputHandlerOwner = (e) => {
    setInputTextOwner(e.target.value);
    if (e.target.value !== "") {
      setCheckInputValueOwnerName(true);
    } else {
      setCheckInputValueAge(false)
    }
    
  };

  const inputHandlerPhonenumber = (e) => {
    setInputTextPhonenumber(e.target.value);
    if (e.target.value !== "") {
      setCheckInputValuePhonenumber(true);
    } else {
      setCheckInputValuePhonenumber(false);
    }
    
  };

  //handler for check if every inputfield have an value
  const inputValueHandler = () => {
    if (
      checkInputValueName &&
      checkInputValueSex &&
      checkInputValueAge &&
      checkInputValueBreed &&
      checkInputValueChipnumber &&
      checkInputValueImg &&
      checkInputValuePresent &&
      checkInputValueOwnerName &&
      checkInputValuePhonenumber
    ) {
      setSubmitButtonIsActive(false);
    } else {
      setSubmitButtonIsActive(true);
    }
  };

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
          placeholder="Name"
        ></input>
        <input
          className="input-text-sex"
          value={inputTextSex}
          onChange={inputHandlerSex}
          placeholder="Gender"
        ></input>
        <input
          className="input-text-age"
          value={inputTextAge}
          onChange={inputHandlerAge}
          placeholder="Age"
        ></input>
        <input
          className="input-text-breed"
          value={inputTextBreed}
          onChange={inputHandlerBreed}
          placeholder="Breed"
        ></input>
        <input
          className="input-text-chipnumber"
          value={inputTextChipnumber}
          onChange={inputHandlerChipnumber}
          placeholder="Press any key"
        ></input>
        <input
          className="input-img"
          value={inputImg}
          onChange={inputHandlerImg}
          placeholder="Img-(URL)"
        ></input>
        <input
          className="input-text-present"
          value={present}
          onChange={presentHandler}
          placeholder="Present: YES/NO"
        />
        <input
          className="input-text-owner"
          value={inputTextOwner}
          onChange={inputHandlerOwner}
          placeholder="Name of the owner"
        ></input>
        <input
          className="input-text-phonenumber"
          value={inputTextPhonenumber}
          onChange={inputHandlerPhonenumber}
          placeholder="Phonenumber"
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
