import React from 'react'
import {FaUserAlt} from "@react-icons/all-files/fa/FaUserAlt"
import axios from 'axios';
import { BASE_URL } from '../constants';
function StudentDetails() {
  const handleSubmit = async e =>{
    e.preventDefault();
    const form = document.querySelector('#user-data')
    const formData = new FormData(form)
    formData.append('token',localStorage.getItem('user-token'))

    const res =await axios.post(BASE_URL+'update_user_data',formData);

    if(res.data.success)
    window.location.href = "/studentprofile"
  }
  return (
    <div className='studentdetails'>
      <p>Enter your full details</p>
      <form id='user-data'>
        <input type='text' name='fathers_name' required placeholder="Father's Name"></input>
        <input type='text' name='mothers_name' required placeholder="Mother's Name"></input>
        <input type='text' name='gender' required placeholder="Gender"></input>
        <input type='text' name='dob'  required placeholder="DOB"></input>
        <input type='text' name='mobile' required placeholder="Mobile Number"></input>
        <input type='text' name='admission_session' required placeholder="Admission Session"></input>
        <input type='text' name='institute_code' required placeholder="Institute Code"></input>
        <input type='text' name='institute_name' required placeholder="Institute Name"></input>
        <input type='text' name='course_name' required placeholder="Course Name"></input>
        <input type='text' name='address' required placeholder="Corresponding Address"></input>
        <input type='text' name='district' required placeholder="District"></input>
        <input type='text' name='pincode' required placeholder="Pin Code"></input>
        <input type='text' name='state' required placeholder="State"></input>
        <input type='text' name='country' required placeholder="Country"></input>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>

    </div>
  )
}

export default StudentDetails