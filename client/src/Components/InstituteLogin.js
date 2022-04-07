import React from 'react'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle';
import {Link} from "react-router-dom"
function InstituteLogin() {
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
                <Link to='/institutesignup'><button type='submit' id="signUpBtnIns" className='signUpBtnIns'>Sign up</button></Link>
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