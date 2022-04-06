import React from 'react'
import StudentNavbar from './StudentNavbar'
import propic from "../assets/images/institute-front.jpg";
import Table from "react-bootstrap/Table"

function StudentProfile() {
  return (
    <div className='studentProfile'>
      <StudentNavbar/>
      <div className='studentContainer'>
      <div className='studentCard'>
        <img src={propic} className='studentAvatar'></img>
        <div className='studentCardBody'>
          <h1>Shubham Singh</h1>
          <hr></hr>
          <div className='cardLowerBody'>
            <h3>Roll No :   1809131152</h3>
            <h3>Semester :   8</h3>
            <h3>Branch :    Electronics and Communication Engineering</h3>
          </div>
        </div>
      </div>
      <div className='studentGeneral'>
        <div className='studentGeneralBody'>
          <h2>Details</h2>
          <hr className='generalBody'></hr>
        </div>
        <div className='generalLowerBody'>
          <table className='tableBody table-bordered'>
              <tr>
                <th>Father's Name</th>
                <td>Bhupendra Singh</td>
              </tr>
            <tbody>
              <tr>
              <th>
                Mother's Name
              </th>
              <td>Sunita Devi</td>
              </tr>
              <tr>
              <th>
                Gender
              </th>
              <td>Male</td>
              </tr>
              <tr>
              <th>
                Date of Birth
              </th>
              <td>31-12-2000</td>
              </tr>
              <tr>
              <th>
                Mobile
              </th>
              <td>8171981644</td>
              </tr>
              <tr>
              <th>
                Admission Session
              </th>
              <td>2018-2019</td>
              </tr>
              <tr>
              <th>
                Institute Code
              </th>
              <td>091</td>
              </tr>
              <tr>
              <th>
                Institute Name
              </th>
              <td>JSS Academy of Technical Education, Gautam Buddh Nagar</td>
              </tr>
              <tr>
              <th>
                Course Name
              </th>
              <td>B.Tech</td>
              </tr>
              <tr>
              <th>
                Email ID
              </th>
              <td>shubhamsinghlj23@gmail.com</td>
              </tr>
              <tr>
              <th>
                Corresponding Address
              </th>
              <td>Garhi Tamna, Aligarh Road, Hathras</td>
              </tr>
              <tr>
              <th>
                District
              </th>
              <td>Hathras</td>
              </tr>
              <tr>
              <th>
                Pin Code
              </th>
              <td>204101</td>
              </tr>
              <tr>
              <th>
                State
              </th>
              <td>Uttar Pradesh</td>
              </tr>
              <tr>
              <th>
                Country
              </th>
              <td>India</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  )
}

export default StudentProfile