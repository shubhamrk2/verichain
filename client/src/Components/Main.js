import React from 'react'
import SignInUp from './SignInUp';
import LoginStudent from './LoginStudent';
import SignUpStudent from './SignUpStudent';
import DashStudent from './DashStudent';
// import '../assets/css/bootstrap/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

function Main() {
  return (
    <Router>
        <div>
        <Routes >
        <Route path='/' element={<SignInUp/>} />
        <Route path='/loginstudent' element={<LoginStudent/>} />
        <Route path='/signupstudent' element={<SignUpStudent/>}/>
        <Route path='/dashstudent' element={<DashStudent />}/>
        </Routes >
        </div>
    </Router>
  )
}

export default Main