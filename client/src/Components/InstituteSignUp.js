import React from 'react'
import { FaGoogle } from '@react-icons/all-files/fa/FaGoogle'
import { Link } from 'react-router-dom'
function InstituteSignUp() {
  return (
    <div className='signup-container-ins'>
      <div className='sign-up-container-ins'>
        <div className='form-container-ins' id='#signupcontainer'>
          <form>
            <h1>Create Account</h1>
            <div className='social-container-signup'>
              <a href='#' className='social'><FaGoogle/></a>
            </div>
            <span className='signup'>or use your email for registration</span>
            <input name='name' type='text' requried placeholder='Name'/>
            <input id="email" name="email" type="email" required placeholder="Email" />
                <input id="password" name="password" type="password" required placeholder="Password" />
                <Link to="/institutelogin"><button id='signup-buttonIns'>Sign Up</button></Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InstituteSignUp