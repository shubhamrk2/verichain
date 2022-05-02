import React from 'react';
import axios from 'axios';
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BASE_URL } from '../constants';
function StudentLogin() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.querySelector('#lform');
        const formData = new FormData(form);
        const res = await axios.post(BASE_URL+'login',formData);
        if(res.data.success === true){
            
            localStorage.setItem('user-token',res.data.token)
            const user = await axios.get(BASE_URL+'get_user?token='+res.data.token)
            localStorage.setItem('user-id',user.data.user.id)

            window.location.href="/studentprofile"
            // console.log(res.data)
        }
        else{
            setError("Please enter the credentials!");
            setTimeout(() => {
                setError("");
            }, 2000);
        }
    }
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
                <input id="lemail" name="email" type="email" required placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
                <input id="lpassword" name="password" type="password" required placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                <p style={{'text-align' : 'center','color' : 'red'}} id="error">{error}</p>
                <br />
                <a href="#" className='forgot'>Forgot your password?</a><br/>
                <button type="submit" id="signinbutton" className='signInButton' onClick={handleSubmit}>Sign in</button>
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
