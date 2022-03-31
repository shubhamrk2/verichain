import React from 'react';
import '../assets/css/SignInUp.css'
function SignInUp() {
  return (
    <div>
    	<a href="/src/student/index.html" className="card">
        <div className="card-image"></div>
        <div className="card-text">
            <h1>STUDENT</h1>
        </div>
        </a>
        <a href="/src/institute/index.html" className="card">
        <div className="card-image2"></div>
        <div className="card-text">
            <h1>INSTITUTE</h1>
        </div>
        </a>
    </div>
  )
}

export default SignInUp;