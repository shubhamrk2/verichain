import React from 'react'
import {FaUserAlt} from "@react-icons/all-files/fa/FaUserAlt"
function StudentDetails() {
  return (
    <div className='studentdetails'>
      <p>Enter your full details</p>
      <form>
        <input type='text' required placeholder="Father's Name"></input>
        <input type='text' required placeholder="Mother's Name"></input>
        <input type='text' required placeholder="Gender"></input>
        <input type='text' required placeholder="DOB"></input>
        <input type='text' required placeholder="Mobile Number"></input>
        <input type='text' required placeholder="Admission Session"></input>
        <input type='text' required placeholder="Institute Code"></input>
        <input type='text' required placeholder="Institute Name"></input>
        <input type='text' required placeholder="Course Name"></input>
        <input type='text' required placeholder="Corresponding Address"></input>
        <input type='text' required placeholder="District"></input>
        <input type='text' required placeholder="Pin Code"></input>
        <input type='text' required placeholder="State"></input>
        <input type='text' required placeholder="Country"></input>
      </form>

    </div>
  )
}

export default StudentDetails