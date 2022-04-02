import React, { useState } from 'react'
import SignInUp from './SignInUp';
import LoginStudent from './LoginStudent';
import SignUpStudent from './SignUpStudent';
import DashStudent from './DashStudent';
import { useEffect } from 'react';
import '../assets/css/Main.css'
// import '../assets/css/bootstrap/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

function Main() {
  const [url,setUrl] = useState(window.location.href);
  useEffect(() => {
    setUrl(window.location.href);
  }, [url]);
  let div_class = url.split("/")[3] === "dashstudent" ? "d-block" : "d-none";
  return (
    <>
    <Router>
        <Routes >
        <Route exact path='/' element={<SignInUp/>} />
        <Route exact path='/loginstudent' element={<LoginStudent/>} />
        <Route exact path='/signupstudent' element={<SignUpStudent/>}/>
        <Route exact path='/dashstudent' element={<SignInUp />}/>
        </Routes >
    </Router>
    <div className={div_class}>
      <DashStudent/>
    </div>
    </>
  )
}

export default Main