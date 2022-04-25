import React from 'react'
import StudentNavbar from './StudentNavbar'
import propic from "../assets/images/institute-front.jpg";
import { Select, TextField, MenuItem } from '@mui/material';
import { KeyboardDatePicker  } from '@material-ui/pickers'
import '../assets/js/studentProfile.js'
import '../assets/css/studentProfile.css'
import {FaEdit} from "@react-icons/all-files/fa/FaEdit"
import axios from 'axios';
import {useState,useEffect} from 'react'
import {BASE_URL} from '../constants'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function StudentProfile() {
  const [userData,setUserData] = useState({
    fathers_name : '',
    mothers_name : '',
    gender : '',
    email: '',
    dob : '',
    mobile : '',
    addmission_session : '',
    insititute_name : '',
    institute_code : '',
    course_name : '',
    address : '',
    district : '',
    pincode : '',
    state : '',
    country : '',
  });

  const [selectedDate, setSelectedDate] = useState(null);
  // const [fathersName, setFathersName] = useState(userData.fathers_name);
  // const [mothersName, setMothersName] = useState(userData.mothers_name);
  // const [gender, setGender] = useState(userData.gender);
  // const [dob, setDob] = useState(userData.dob);
  // const [mobile, setMobile] = useState(userData.mobile);
  // const [admissionSession, setAdmissionSession] = useState(userData.admission_session);
  // const [instituteCode, setInstituteCode] = useState(userData.institute_code);
  // const [instituteName, setInstituteName] = useState(userData.insititute_name);
  // const [courseName, setCourseName] = useState(userData.course_name);
  // const [address, setAddress] = useState(userData.address);
  // const [district, setDistrict] = useState(userData.district);
  // const [pincode, setPincode] = useState(userData.pincode);
  // const [state, setState] = useState(userData.state);
  // const [country, setCountry] = useState(userData.country);
  
  useEffect(async () => {
    const formData = new FormData;
    formData.append('token',localStorage.getItem('user-token'))
    const res = await axios.post(BASE_URL+'get_user_data',formData);
    setUserData(res.data)
  }, []);

  const handleInput = e =>{
    setUserData({...userData, [e.target.name] : e.target.value})
    console.log(userData)
  }
  const handleEdit = async () => {
    const styles = document.querySelectorAll('.data-block');
    const fields = document.querySelectorAll('.field-container'); 
    if(styles[0].style.display === "none"){
      styles.forEach(s=>s.style.display="unset");
      fields.forEach(s=>s.style.display="none");

      const inputs = document.querySelectorAll('.input-fields');
      const formData =new FormData;
      formData.append('token',localStorage.getItem('user-token'))
      inputs.forEach(i=>{
          formData.append(i.getAttribute('name'),i.getAttribute('value'));
        }
      )
      const res = await axios.post(BASE_URL+'update_user_data',formData);
    }
    else{
      styles.forEach(s=>s.style.display="none");
      fields.forEach(s=>s.style.display="unset");
    }
  }
  return (
    <div className='studentProfile'>
      <StudentNavbar/>
      <div className='studentContainer'>
      <div className='studentCard'>
        <div className='studentEdit'><img src={propic} className='studentAvatar'></img>
        <a href='#' className='editS' onClick={handleEdit}><FaEdit/></a></div>
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
          <a href='#' className='edit' onClick={handleEdit}><FaEdit/></a>
          <hr className='generalBody'></hr>
        </div>
        <div className='generalLowerBody'>
          <table className='tableBody table-bordered'>
              <tr>
                <th>Father's Name</th>
                <td className='data-block'>{userData.fathers_name}</td>
                <div className='field-container'>
                <TextField inputProps={{ className: "input-fields", name: "fathers_name" }} variant="standard" size="small" value={userData.fathers_name} onChange={handleInput} />
                </div>
              </tr>
            <tbody>
              <tr>
              <th>
                Mother's Name
              </th>
              <td className='data-block'>{userData.mothers_name}</td>
              <div className='field-container'>
              <TextField inputProps={{ className: "input-fields", name: "mothers_name" }} variant="standard" size="small" value={userData.mothers_name} onChange={handleInput} />
              </div>
              </tr>
              <tr>
              <th>
                Gender
              </th>
              <td className='data-block'>{userData.gender}</td>
              <div className='field-container'>
              <TextField inputProps={{ className: "input-fields", name: "gender" }} variant="standard" size="small" value={userData.gender} onChange={handleInput} />
              
              {/* <Select inputProps={{ className: "input-fields", name: "gender" }} variant="standard" size="small" value={gender} onChange={(e) => setGender(e.target.value)} >
                <MenuItem value={"m"}>Male</MenuItem>
                <MenuItem value={"f"}>Female</MenuItem>
              </Select> */}
              </div>
              </tr>
              <tr>
              <th>
                Date of Birth
              </th>
              <td className='data-block'>{userData.dob}</td>
              <div className='field-container'>
              <TextField inputProps={{ className: "input-fields", name: "dob" }} variant="standard" size="small" value={userData.dob} onChange={handleInput} />
              <DatePicker 
              selected={selectedDate} 
              onChange={date => setSelectedDate(date)}
              />
              {/* <KeyboardDatePicker
                placeholder="10/10/2022"
                value={dob}
                onChange={date => setDob(date)}
                format="dd/MM/yyyy"
              /> */}
              </div>
              </tr>
              <tr>
              <th>
                Mobile
              </th>
              <td className='data-block'>{userData.mobile}</td>
              <div className='field-container'>
              <TextField inputProps={{ className: "input-fields", name: "mobile" }} variant="standard" size="small" value={userData.mobile} onChange={handleInput}  />
              </div>
                
              </tr>
              <tr>
              <th>
                Admission Session
              </th>
              <td className='data-block'>{userData.addmission_session}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name: "admission_session" }} variant="standard" size="small" value={userData.addmission_session} onChange={handleInput} />
              </div>
              </tr>
              <tr>
              <th>
                Institute Code
              </th>
              <td className='data-block'>{userData.institute_code}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name: "institute_code" }} variant="standard" size="small"value={userData.institute_code} onChange={handleInput} />
              </div>
              </tr>
              <tr>
              <th>
                Institute Name
              </th>
              <td className='data-block'>{userData.insititute_name}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name: "institute_name" }} variant="standard" size="small" value={userData.insititute_name} onChange={handleInput} />
              </div>
              </tr>
              <tr>
              <th>
                Course Name
              </th>
              <td className='data-block'>{userData.course_name}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name: "course_name" }} variant="standard" size="small" value={userData.course_name} onChange={handleInput} />
              </div>
              </tr>
              <tr>
              <th>
                Email ID
              </th>
              <td>{userData.email}</td>
              <div className='field-container'>

              {/* <TextField inputProps={{ className: "input-fields", name: "email" }} variant="standard" size="small" defaultValue="Bhupendra Singh" /> */}
              </div>
              </tr>
              <tr>
              <th>
                Corresponding Address
              </th>
              <td className='data-block'>{userData.address}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name:"address" }} variant="standard" size="small"  value={userData.address} onChange={handleInput} />
              </div>
              </tr>
              <tr>
              <th>
                District
              </th>
              <td className='data-block'>{userData.district}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name:"district" }} variant="standard" size="small"  value={userData.district} onChange={handleInput} />
              </div>
              </tr>
              <tr>
              <th>
                Pin Code
              </th>
              <td className='data-block'>{userData.pincode}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name:"pincode" }} variant="standard" size="small"  vvalue={userData.pincode} onChange={handleInput} />
              </div>
              </tr>
              <tr>
              <th>
                State
              </th>
              <td className='data-block'>{userData.state}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name:"state" }} variant="standard" size="small" value={userData.state} onChange={handleInput} />
              </div>
              </tr>
              <tr>
              <th>
                Country
              </th>
              <td className='data-block'>{userData.country}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name:"country" }} variant="standard" size="small"  value={userData.country} onChange={handleInput} />
              </div>
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