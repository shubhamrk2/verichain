import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { BsFillCaretDownFill } from '@react-icons/all-files/bs/BsFillCaretDownFill'
import React from "react";

function InstituteNavbar() {
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
        <li>
          <a className="ins" href="#">Notifications</a>
        </li>
        <li>
          <a className="ins" href="#">
            <BsFillCaretDownFill />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default InstituteNavbar;
