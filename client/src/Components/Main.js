import React from 'react'
import SignInUp from './SignInUp';
import Login from './Login';
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
        <Route path='/login/:type' element={<Login/>} />
        </Routes >
        </div>
    </Router>
  )
}

export default Main