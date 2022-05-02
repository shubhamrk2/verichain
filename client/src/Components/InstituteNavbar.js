import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { BsFillCaretDownFill } from '@react-icons/all-files/bs/BsFillCaretDownFill'
import React from "react";
import "../assets/css/navbar.css";
import axios from "axios";
import { BASE_URL } from "../constants";
function InstituteNavbar() {
  const sendToLogin = () =>{
    window.location.href="/institutelogin"
  }
  const handleLogout = async () =>{
    const formData = new FormData;
    formData.append('token',localStorage.getItem('user-token'));
    const res = await axios.post(BASE_URL+'logout',formData);
    if(res.data.success === true || res.data.status === 'Token is Expired'){
      localStorage.removeItem('user-token');
      sendToLogin()
    }
  }
  return (
    <div className="navbarIns">
      <img
        src="https://res.cloudinary.com/therealdaaku/image/upload/v1646831444/Verichain/VeriChain-logo-transparent-black_jbkiue.png"
        className="logo"
      />
      {/* <input type='checkbox' id='click'/>
      <label for='click'>
        <FaBars classname='menuBtn'/>
      </label> */}
      <ul>
        <li>
          <a className="ins" href="/instituteprofile">Home</a>
        </li>
        <li>
          <a className="ins" href="/registeredstudents
          ">Registered Students</a>
        </li>
        <li className="navbar-dropdown">
          <a className="ins" href="#">Notifications</a>
          <ul className="navbar-dropdown-inner">
            <li>Notification 1</li>
            <li>Notification 2</li>
            <li>Notification 3</li>
          </ul>
        </li>
        <li className="navbar-dropdown">
          <a href="#">
            <BsFillCaretDownFill />
          </a>
          <ul className='navbar-dropdown-inner'>
              <li><a href='/instituteprofile'>My Profile</a></li>
              <li><a href="#" onClick={handleLogout}>Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default InstituteNavbar;
