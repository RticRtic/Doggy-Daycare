import React, { useEffect, useState } from "react";

const Info = ({ data }) => {
  const [dogIsPresent, setDogIsPresent] = useState(null);
  const [searchInputText, setSearchInputText] = useState("");
  const [dogs, setDogs] = useState(data);

  useEffect(() => {

  }, [dogIsPresent,searchInputText]);

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

  const searchInput = (e) => {
    let dogName = [];
    clearSearchInputField();
    data.forEach((input) => {
      if (input.name.startsWith(e.target.value)) {
        console.log(e.target.value);
        setSearchInputText(e.target.value);
        dogName.push(input);
      }
    });
    setDogs(dogName);
  };

  //   input_search_country.addEventListener("input", function() {
  //     // searchCountryByFullName(input_search_country.value);
  //      if(allData != null) {
  //          clearDataContainer();
  //          clearLongLatTextDisplay();
  //          allData.forEach(country => {
  //              if(country.Combined_Key.startsWith(input_search_country.value)) {
  //                  showCountryCovidData(country);
  //              }

  //          })

  //      }

  //  })

  const dogInfo = dogs.map((dog) => (
    <div className="dogItem">
      <div className="name"> Name: {dog.name}</div>
      <div className="sex">Sex: {dog.sex}</div>
      <div className="age">Age: {dog.age}</div>
      <div className="breed">Breed: {dog.breed}</div>
      <div className="chipnumber">Chipnumber: {dog.chipNumber}</div>
      <div className="present">Present: {dog.present.toString()}</div>
      <img className="dog-img" src={dog.img} alt="dog" />
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
          className="input"
          placeholder="Search By Name"
          onChange={searchInput}
        />
      </div>

      <div className="dogList">{dogInfo}</div>
    </div>
  );
};

export default Info;
