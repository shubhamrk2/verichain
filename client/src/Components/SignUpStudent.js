import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
function SignUpStudent() {
  return (
    <div>
        <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form method="POST" action="" id="form">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="/login/google" className="social"><FaGoogle/></a>
                </div>
                <span>or use your email for registration</span>
                <input id="name" name="name" type="text" required placeholder="Name"/>
                <input id="email" name="email" type="email" required placeholder="Email" />
                <input id="password" name="password" type="password" required placeholder="Password" />
                <Link to="/loginstudent"><button>Sign Up</button></Link>
            </form>
            </div>
  </div> 
    </div>
  )
}

export default SignUpStudent