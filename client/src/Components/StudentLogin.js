import React from 'react';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { Link } from 'react-router-dom';
function StudentLogin() {
  return (
    <div className='login-student'>
    <div className="signin-container" id="container">
        <div className="form-container sign-in-container">
            <form id="lform" action="#" method="POST">
                <br></br>
                <h1 id='login-page'>Sign in</h1>
                <div className="social-container">
                   <a href='#'> 
                    <FaGoogle/>
                    </a>
                </div>
                <span>or use your account</span>
                <br></br>
                <input id="lemail" name="email" type="email" required placeholder="Email" />
                <input id="lpassword" name="password" type="password" required placeholder="Password" />
                <br></br>
                <a href="#" className='forgot'>Forgot your password?</a><br/>
                <Link to="/studentprofile"><button type="submit" id="signinbutton" className='signInButton'>Sign in</button></Link>
                <p>Don't have an account with us? Create one!</p>
                <Link to='/signupstudent'><button type='submit' id="signUp" className='signUpButton'>Sign Up</button></Link>
            </form>
        </div>
        
    </div>
    <footer>
        <button className="shiftSt"><a href="/" className="inside-buttonSt">HOME</a></button>
    </footer>
    </div>
  )
}

export default StudentLogin
