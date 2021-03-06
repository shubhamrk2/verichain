import React, { useState } from 'react'
import SignInUp from './SignInUp';
import StudentLogin from './StudentLogin';
import StudentSignUp from './StudentSignUp';
import StudentUpload from './StudentUpload';
import InstituteLogin from './InstituteLogin';
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
import InstituteSignUp from "./InstituteSignUp";
import InstituteProfile from "./InstituteProfile"
import InstituteRegisteredStudents from './InstituteRegisteredStudents';
import StudentDetails from './StudentDetails';

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
          <Route exact path='/user-data' element={<StudentDetails/>} />
          <Route exact path='/signupstudent' element={<StudentSignUp/>}/>
          <Route exact path='/studentupload' element={<StudentUpload />}/>
          <Route exact path='/mydocuments' element={<StudentMyDocuments />} />
          <Route exact path='/studentprofile' element={<StudentProfile />} />
          <Route exact path='/studentdetails' element={<StudentDetails />} />
        </Routes >
        <Routes>
          <Route exact path='/institutelogin' element={<InstituteLogin />}/>
          <Route exact path='/institutesignup' element={<InstituteSignUp/>}/>
          <Route exact path='/instituteprofile' element={<InstituteProfile />} />
          <Route exact path='/registeredstudents' element={<InstituteRegisteredStudents />} />
        </Routes>
    </Router>
    </>
  );
}

export default Main