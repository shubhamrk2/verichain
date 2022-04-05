import React, { useState } from 'react'
import SignInUp from './SignInUp';
import StudentLogin from './StudentLogin';
import StudentSignUp from './StudentSignUp';
import StudentUpload from './StudentUpload';
import { useEffect } from 'react';
import '../assets/css/Main.css'
// import '../assets/css/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import StudentMyDocuments from './StudentMyDocuments';
import StudentProfile from './StudentProfile';

function Main() {
    // useEffect( ()=>{
    //     localStorage.setItem("reload",1);
    // });
  return (
    <>
    <Router>
        <Routes >
        <Route exact path='/' element={<SignInUp/>} />
        <Route exact path='/loginstudent' element={<StudentLogin/>} />
        <Route exact path='/signupstudent' element={<StudentSignUp/>}/>
        <Route exact path='/studentupload' element={<StudentUpload />}/>
        <Route exact path='/mydocuments' element={<StudentMyDocuments />} />
        <Route exact path='/studentprofile' element={<StudentProfile />} />
        </Routes >
    </Router>
    </>
  );
}

export default Main