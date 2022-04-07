import React, { useState } from 'react';

const Register = () => {

    const [registerDog, setRegisterDog] = useState([]);

    

    return(
        <div>
            <h1>
                Register Your Dog
            </h1>

            <div className='input'>
            
            <input placeholder="Name"></input>
            <input placeholder="Sex"></input>
            <input placeholder="Age"></input>
            <input placeholder="Breed"></input>
            <input placeholder="Chipnnumber"></input>
            <input placeholder="Image"></input>
            <input placeholder="Name Of The Owner"></input>
            <input placeholder="Phonenumber"></input>

            </div>

            <button className='submitButton'>Submit</button>

        </div>
    );
}


export default Register;