import React from 'react';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { Link } from 'react-router-dom';
function LoginStudent() {
  return (
    <div className='login-student'>
    <div className="container" id="container">
        <div className="form-container sign-in-container">
            <form id="lform" action="{{route('student.login')}}" method="POST">
                <br></br>
                <h1>Sign in</h1>
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
                <a href="{{route('password.request')}}" >Forgot your password?</a><br/>
                <Link to="/dashstudent"><button type="submit" id="signinbutton" className='signInButton'>Sign In</button></Link>
                <p>Don't have an account with us? Create one!</p>
                <Link to='/signupstudent'><button type='submit' id="signUp" className='signUpButton'>Sign Up</button></Link>
            </form>
        </div>
        
    </div>
    <footer>
        <button className="shift"><a href="/" className="inside-button">HOME</a></button>
    </footer>
    </div>
  )
}

export default LoginStudent
