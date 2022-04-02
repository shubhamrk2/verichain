import React from 'react'
import "../assets/css/login.css";
// import  FontAwesome from 'react-fontawesome';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
// import {FaGithub} from "@react-icons/all-files/fa/FaGithub"
// import '../';
import { Link } from 'react-router-dom';
function LoginStudent() {
  return (
    <div>
    <div className="container" id="container">
        <div className="form-container sign-in-container">
            <form id="lform" action="{{route('student.login')}}" method="POST">
                <h1>Sign in</h1>
                <div className="social-container">
                    {/* <FontAwesome name='google'/> */}
                    {/* <i className="fa fa-google-plus-g"></i> */}
                    <FaGoogle/>
                    {/* <FaGithub/> */}
                </div>
                <span>or use your account</span>
                <input id="lemail" name="email" type="email" required placeholder="Email" />
                <input id="lpassword" name="password" type="password" required placeholder="Password" />
                <a href="{{route('password.request')}}" >Forgot your password?</a><br/><br/><br/>
                <Link to="/dashstudent"><button type="submit" id="signinbutton">Sign In</button></Link>
                <p>Don't have an account with us? Create one!</p>
                <Link to='/signupstudent'><button type='submit' id="signUp">Sign Up</button></Link>
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
