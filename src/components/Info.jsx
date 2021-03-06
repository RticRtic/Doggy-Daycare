import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Info = ({ data, setShowDog }) => {
  // const DOG = "dog";
  // const INFO = "info";

  const [dogIsPresent, setDogIsPresent] = useState(null);
  const [searchInputText, setSearchInputText] = useState("");
  const [dogs, setDogs] = useState(data);
  //const [showDog, setShowDog] = useState(null);

  useEffect(() => {}, [dogIsPresent, searchInputText]);

  //Filter what dog is present and adding it to an empy array
  const filterHandlerPresent = () => {
    let isPresent = [];

    data.forEach((dog) => {
      if (dog.present === true) {
        isPresent.push(dog);
        console.log(isPresent);
      }
    });
    setDogs(isPresent);
  };

  const filterHandlerNotPresent = () => {
    let notPresent = [];

    data.forEach((dog) => {
      if (dog.present === false) {
        notPresent.push(dog);
        console.log(notPresent);
      }
    });
    setDogs(notPresent);
  };

  const showAllDogs = () => {
    setDogs(data);
  };

  // choosing what to se from the select list
  const setFilterState = (e) => {
    console.log(e.target.value);
    if (e.target.value === "present") {
      setDogIsPresent(true);
      filterHandlerPresent();
    } else if (e.target.value === "all") {
      setDogIsPresent(null);
      showAllDogs();
    } else {
      setDogIsPresent(false);
      filterHandlerNotPresent();
    }
  };

  const clearSearchInputField = () => {
    setSearchInputText("");
  };

  //search dog by name when typing in inputfield. UpperCase is needed
  const searchInputName = (e) => {
    let dogName = [];
    clearSearchInputField();
    data.forEach((input) => {
      if (input.name.startsWith(e.target.value)) {
        setSearchInputText(e.target.value);
        dogName.push(input);
      }
    });
    setDogs(dogName);
  };

  const searchInputBreed = (e) => {
    let breed = [];
    clearSearchInputField();
    data.forEach((input) => {
      if (input.breed.startsWith(e.target.value)) {
        setSearchInputText(e.target.value);
        breed.push(input);
      }
      setDogs(breed);
    });
  };

  // const showDogDataHandler = (e) => {
  //   let info = [];

  //   info.push(e.target.src);
  //   console.log("info array: ", info);

  //   setShowDog(e.target.src);
  //   console.log(showDog)

  //      <Dog dogItem = {singleDogData}/>
  // };

  //showing data from the api. Data is in the dogs state.
  const dogInfo = dogs.map((dog) => (
    <div className="dogItem" key={dog.chipNumber}>
      <div className="name"> Name: {dog.name}</div>
      <div className="sex">Sex: {dog.sex}</div>
      <div className="age">Age: {dog.age}</div>
      <div className="breed">Breed: {dog.breed}</div>
      <div className="chipnumber">Chipnumber: {dog.chipNumber}</div>
      <div className="present">Present: {dog.present.toString()}</div> <br />
      <div className="grid-text">Click the image</div>
      <Link to="/showdog">
        <img
          onClick={() => setShowDog(dog)}
          className="dog-img"
          src={dog.img}
          alt="dog"
        />
      </Link>
      <div className="owner">
        Owner: {dog.owner["name"]} {dog.owner["lastName"]}
      </div>
      <div className="phoneNumber">Phonenumber: {dog.owner.phoneNumber} </div>
    </div>
  ));

  return (
    <div>
      <div className="select">
        <select className="select-present" onChange={setFilterState}>
          <option value="all">Show All</option>
          <option value="notPresent">Not in Daycare</option>
          <option value="present">Present in Daycare</option>
        </select>

        <input
          className="search-name"
          placeholder="Search By Name"
          onChange={searchInputName}
        />
        <input
          className="search-breed"
          placeholder="Search Breed"
          onChange={searchInputBreed}
        />
      </div>

      <div className="info-buttons">
        <Link to="/">
          <button className="start-page">Home Page</button>
        </Link>
        <Link to="/register">
          <button className="register-page">Register Dog</button>
        </Link>
      </div>

      <div className="dogList">{dogInfo}</div>
    </div>
  );
};

export default Info;
