import React from 'react'
import StudentNavbar from './StudentNavbar'
import propic from "../assets/images/institute-front.jpg";
import { TextField } from '@mui/material';
import '../assets/js/studentProfile.js'
import '../assets/css/studentProfile.css'
import {FaEdit} from "@react-icons/all-files/fa/FaEdit"
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
          <button className='edit' type='submit'><FaEdit/></button>
          <hr className='generalBody'></hr>
        </div>
        <div className='generalLowerBody'>
          <table className='tableBody table-bordered'>
              <tr>
                <th>Father's Name</th>
                <td>Bhupendra Singh</td>
                <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
            <tbody>
              <tr>
              <th>
                Mother's Name
              </th>
              <td>Sunita Devi</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Gender
              </th>
              <td>Male</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Date of Birth
              </th>
              <td>31-12-2000</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Mobile
              </th>
              <td>8171981644</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Admission Session
              </th>
              <td>2018-2019</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Institute Code
              </th>
              <td>091</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Institute Name
              </th>
              <td>JSS Academy of Technical Education, Gautam Buddh Nagar</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Course Name
              </th>
              <td>B.Tech</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Email ID
              </th>
              <td>shubhamsinghlj23@gmail.com</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Corresponding Address
              </th>
              <td>Garhi Tamna, Aligarh Road, Hathras</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                District
              </th>
              <td>Hathras</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Pin Code
              </th>
              <td>204101</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                State
              </th>
              <td>Uttar Pradesh</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
              </tr>
              <tr>
              <th>
                Country
              </th>
              <td>India</td>
              <TextField id="standard-basic" inputProps={{ className: "input-fields" }} variant="standard" size="small" defaultValue="Bhupendra Singh" />
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