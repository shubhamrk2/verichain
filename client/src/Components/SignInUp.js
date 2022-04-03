import React from 'react';
import { Link } from 'react-router-dom';
function SignInUp() {
  return (
    <div className='parent-div-signup'>
    	<Link to="/loginstudent" className="card">
        <div className="card-image"></div>
        <div className="card-text">
            <h1>STUDENT</h1>
        </div>
        </Link>
        <Link to="/logininstitute" className="card">
        <div className="card-image2"></div>
        <div className="card-text">
            <h1>INSTITUTE</h1>
        </div>
        </Link>
    </div>
  );
}

export default SignInUp;