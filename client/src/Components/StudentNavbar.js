import React from 'react'
import "../assets/css/Main.css";
import {FaBars} from "@react-icons/all-files/fa/FaBars";
import {BsFillCaretDownFill} from "@react-icons/all-files/bs/BsFillCaretDownFill"
import "../assets/css/navbar.css"
import axios from 'axios'
import { useEffect } from 'react';
import { BASE_URL } from '../constants';
function StudentNavbar() {
  const sendToLogin = () =>{
    window.location.href="/loginstudent"
  }
  useEffect(() => {
    if(!localStorage.getItem('user-token'))
    sendToLogin()
  }, []);
  const handleLogout = async () =>{
    const formData = new FormData;
    formData.append('token',localStorage.getItem('user-token'));
    const res = await axios.post(BASE_URL+'logout',formData);
    if(res.data.success === true){
      localStorage.removeItem('user-token');
      sendToLogin()
    }
  }
  return (
    <>
      <div className='navbar'>
        <img src='https://res.cloudinary.com/therealdaaku/image/upload/v1646831444/Verichain/VeriChain-logo-transparent-black_jbkiue.png' className='logo'></img>
        <input type='checkbox' id='click'></input>
        <label for="click"><FaBars className='menuBtn'></FaBars></label>
        <ul>
          <li><a href='/studentprofile'>Home</a></li>
          <li><a href='/studentupload'>Upload</a></li>
          <li><a href='/mydocuments'>My Documents</a></li>
          <li className='navbar-dropdown'>
            <BsFillCaretDownFill/>
            <ul className='navbar-dropdown-inner'>
              <li><a href='/studentprofile'>My Profile</a></li>
              <li><a href="#" onClick={handleLogout}>Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default StudentNavbar