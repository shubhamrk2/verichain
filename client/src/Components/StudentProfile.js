import React from 'react'
import StudentNavbar from './StudentNavbar'
import propic from "../assets/images/institute-front.jpg"

function StudentProfile() {
  return (
    <div className='studentProfile'>
      <StudentNavbar/>
      <div className='studentContainer'>
      <div className='studentCard'>
        <img src={propic} className='studentAvatar'></img>
        <div className='studentCardBody'>
          <h2>Shubham Singh</h2>
          <h4>Roll No :  1809131152</h4>
          <h4>Semester :  8</h4>
          <h4>Branch :  Electronics and Communication Engineering</h4>
        </div>
      </div>
      <div className='studentGeneral'>
        
      </div>
      </div>
    </div>
  )
}

export default StudentProfile