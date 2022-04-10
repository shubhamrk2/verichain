import React from "react";
import { Link } from "react-router-dom";
function SignInUp() {
  return (
    <div className="backgroundImg">
      <div className="parent-div-signup">
        <div className="index-content">
          <Link to="/loginstudent" className="card">
            <div className="card-image"></div>
            <div className="card-text">
              <h1 id="signInUp">STUDENT</h1>
            </div>
          </Link>
          <Link to="/institutelogin" className="card">
            <div className="card-image2"></div>
            <div className="card-text">
              <h1 id="signInUp">INSTITUTE</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInUp;
