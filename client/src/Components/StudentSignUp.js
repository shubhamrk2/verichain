import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import axios from 'axios';
import { BASE_URL } from '../constants';
function SignUpStudent() {
  const [error, setError] = useState("");
  const handleSignUp = async (e) =>{
    e.preventDefault();

    const form = document.querySelector('#form');
    const formData = new FormData(form);
    formData.append('type','student');

    const res = await axios.post(BASE_URL+'register',formData);
    
    if(res.data.success === true)
    window.location.href = "/loginstudent"
    else{
      setError("Please enter the required fields!");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  } 
  return (
    <div className='signup-container'>
        <div className="sign-up-container" id="container">
        <div className="form-container" id='signupcontainer'>
            <form method="POST" action="" id="form">
                <h1>Create Account</h1>
                <div className="social-container-signup">
                    <a href="/login/google" className="social"><FaGoogle/></a>
                </div>
                <span className='signup'>or use your email for registration</span>
                <input id="name" name="name" type="text" required placeholder="Name"/>
                <input id="email" name="email" type="email" required placeholder="Email" />
                <input id="password" name="password" type="password" required placeholder="Password" />
                <a href='/studentdetails'><button id='signup-button' onClick={handleSignUp}>Sign Up</button></a>
                <p style={{"text-align":"center","color":"red"}}>{error}</p>
            </form>
            </div>
  </div> 
    </div>
  )
}

export default SignUpStudent