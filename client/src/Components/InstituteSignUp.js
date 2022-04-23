import React,{ useState } from 'react'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../constants';
function InstituteSignUp() {
  const [error, setError] = useState("");
  const handleSignUp = async (e) =>{
    e.preventDefault();

    const form = document.querySelector('#form');
    const formData = new FormData(form);
    formData.append('type','institute');

    const res = await axios.post(BASE_URL+'register',formData);
    
    if(res.data.success === true)
    window.location.href = "/institutelogin"
    else{
      setError("Please enter the required fields!");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  } 
  return (
    <div className='signup-container-ins'>
      <div className='sign-up-container-ins'>
        <div className='form-container-ins' id='#signupcontainer'>
          <form id='form'>
            <h1>Create Account</h1>
            <div className='social-container-signup'>
              <a href='#' className='social'><FaGoogle/></a>
            </div>
            <span className='signup'>or use your email for registration</span>
            <input name='name' type='text' requried placeholder='Name'/>
            <input id="email" name="email" type="email" required placeholder="Email" />
                <input id="password" name="password" type="password" required placeholder="Password" />
                <Link to="/institutelogin"><button id='signup-buttonIns' onClick={handleSignUp}>Sign Up</button></Link>
                <p style={{'text-align':'center','color':'red'}}>{error}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InstituteSignUp