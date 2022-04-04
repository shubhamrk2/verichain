import React from 'react'
import "../assets/css/Main.css"
function Navbar() {
  return (
    <>
      <div className='navbar'>
        <img src='https://res.cloudinary.com/therealdaaku/image/upload/v1646831444/Verichain/VeriChain-logo-transparent-black_jbkiue.png' className='logo'></img><div className='logoname'><h1>VeriChain</h1></div>
        <ul className='studentD'>
          <li><a href='/dashstudent'>Home</a></li>
          <li><a href='#'>My Documents</a></li>
          <li><a href='#'>Profile</a></li>
          <li><a href='#'>Logout</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar