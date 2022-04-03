import React, { useState } from 'react'
import SignInUp from './SignInUp';
import LoginStudent from './LoginStudent';
import SignUpStudent from './SignUpStudent';
import DashStudent from './DashStudent';
import { useEffect } from 'react';
import '../assets/css/Main.css'
// import '../assets/css/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

function Main() {
    useEffect( ()=>{
        localStorage.setItem("reload",1);
    });
  return (
    <>
    <Router>
        <Routes >
        <Route exact path='/' element={<SignInUp/>} />
        <Route exact path='/loginstudent' element={<LoginStudent/>} />
        <Route exact path='/signupstudent' element={<SignUpStudent/>}/>
        <Route exact path='/dashstudent' element={<DashStudent />}/>
        </Routes >
    </Router>
    </>
  );
}

export default Main