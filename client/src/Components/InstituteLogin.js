import React,{useState} from 'react'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle';
import {Link} from "react-router-dom"
import axios from 'axios';
import { BASE_URL } from '../constants';
function InstituteLogin() {
    const [error,setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const form = document.querySelector('#lform');
        const formData = new FormData(document.getElementById('insForm'));
        const res = await axios.post(BASE_URL+'login',formData);
        console.log(res)
        if(res.data.success === true){
            localStorage.setItem('user-token',res.data.token)
            window.location.href="/instituteprofile"
        }
        else{
            setError("Please enter the credentials!");
            setTimeout(() => {
                setError("");
            }, 2000);
        }
    }
  return (
    <div  className='login-institute'>
      <div className='signin-container-ins'>
        <div className='formcontainer sign-in-container-ins'>
          <form className='insForm'>
            <br></br>
            <h1>Sign in</h1>
            <div className='social-container-ins'>
              <a href="#"><FaGoogle/></a>
            </div>
            <span>or use your account</span>
            <br></br>
            <input name='email' type='email' required placeholder='Email'/>
            <input name='password' type='password' required placeholder='Password'/>
            <br></br>
            <a href='#' className='forgot'>Forgot Your Password?</a><br/>
            <Link to="/instituteprofile">
              <button type='submit' className='insSignBtn'>Sign in</button>
            </Link>
            <p>Don't have an account with us? Create one!</p>
                <Link to='/institutesignup'><button type='submit' id="signUpBtnIns" className='signUpBtnIns' onClick={handleSubmit}>Sign up</button></Link>
          </form>
        </div>
      </div>
      <footer>
        <button className="shiftIns"><a href="/" className="inside-button">HOME</a></button>
    </footer>
    </div>
  )
}

export default InstituteLogin