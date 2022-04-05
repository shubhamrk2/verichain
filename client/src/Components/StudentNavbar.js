import React from 'react'
import "../assets/css/Main.css";
import {FaBars} from "@react-icons/all-files/fa/FaBars";
import {BsFillCaretDownFill} from "@react-icons/all-files/bs/BsFillCaretDownFill"
function StudentNavbar() {
  return (
    <>
      <div className='navbar'>
        <img src='https://res.cloudinary.com/therealdaaku/image/upload/v1646831444/Verichain/VeriChain-logo-transparent-black_jbkiue.png' className='logo'></img><div className='logoname'><h1>VeriChain</h1></div>
        <input type='checkbox' id='click'></input>
        <label for="click"><FaBars className='menuBtn'></FaBars></label>
        <ul>
          <li><a href='/studentprofile'>Home</a></li>
          <li><a href='/studentupload'>Upload</a></li>
          <li><a href='/mydocuments'>My Documents</a></li>
          <li><a href='#'><BsFillCaretDownFill/></a></li>
        </ul>
      </div>
    </>
  )
}

export default StudentNavbar