import React from 'react';
import { Link } from 'react-router-dom';
import background from "../assets/background.mp4"
function SignInUp() {
  return (
    <div className='parent-div-signup'>
      
      <video loop autoPlay muted id='myVideo'>
        <source src={background} type='video/mp4'/>
        Your browser does not support this video tag.
        </video>
        <div className='content'>
    	<Link to="/loginstudent" className="card">
        <div className="card-image"></div>
        <div className="card-text">
            <h1 id='signInUp'>STUDENT</h1>
        </div>
        </Link>
        <Link to="/logininstitute" className="card">
        <div className="card-image2"></div>
        <div className="card-text">
            <h1 id='signInUp'>INSTITUTE</h1>
        </div>
        </Link>
        
    </div>
    </div>
  );
}

export default SignInUp;