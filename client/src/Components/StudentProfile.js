import React from 'react'
import StudentNavbar from './StudentNavbar'
import propic from "../assets/images/institute-front.jpg";
import { TextField } from '@mui/material';
import '../assets/js/studentProfile.js'
import '../assets/css/studentProfile.css'
import {FaEdit} from "@react-icons/all-files/fa/FaEdit"
import axios from 'axios';
import {useState,useEffect} from 'react'
import {BASE_URL} from '../constants'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment';
function StudentProfile() {
  const [userData,setUserData] = useState({
    fathers_name : '',
    mothers_name : '',
    gender : '',
    email: '',
    dob : null,
    mobile : '',
    admission_session : '',
    institute_name : '',
    institute_code : '',
    course_name : '',
    address : '',
    district : '',
    pincode : '',
    state : '',
    country : '',
    roll_no:'',
    semester:'',
    branch:'',
    profile_image:null,
    name:'',
  });
  
  useEffect( () => {
    async function fetchData(){
      const formData = new FormData;
      formData.append('token',localStorage.getItem('user-token'))
      const res = await axios.post(BASE_URL+'get_user_data',formData);
      // console.log('date is '+ moment(res.data.dob))
      console.log(res)
      setUserData(res.data)
    }
    fetchData()
  }, []);

  const handleInput = e =>{
    setUserData({...userData, [e.target.name] : e.target.value})
    // console.log(userData)
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
      // console.log(inputs)
      const res = await axios.post(BASE_URL+'update_user_data',formData);
      // console.log(res)
    }
    else{
      styles.forEach(s=>s.style.display="none");
      fields.forEach(s=>s.style.display="unset");
    }
  }
  const upload = document.querySelector('#profile_image');
  const handleImageChange = (e) => {
    const formData = new FormData();
    const file = e.target.files[0]
    if(!file.name.match(/\.(jpg|jpeg|png|gif)$/)){
      alert("Only jpg, png and gif are allowed.")
      return
    }
    formData.append('image',file)
    formData.append('image_name',file.name)
    formData.append('token',localStorage.getItem('user-token'))
    axios.post(BASE_URL+'upload_profile_image',formData).then((res)=>{
      setUserData({...userData, profile_image : res.data.url})
      upload.value=null
      console.log(res.data)
    }).catch((error)=>{
      console.log(error)
    });
  }

  return (
    <div className='studentProfile'>
      <StudentNavbar/>
      <div className='studentContainer'>
      <div className='studentCard'>
        <div className='profileImage'>
          <img onClick={()=>{upload.click()}} src={userData.profile_image?userData.profile_image:propic} className='studentAvatar' />
        {/* <a href='#' className='editS' onClick={handleLeftEdit}><FaEdit/></a> */}
          <input type='file' id='profile_image' onChange={handleImageChange} style={{'display':'none'}}></input>
        </div>
        <div className='studentCardBody'>
          <h1>{userData.name}</h1>
          <hr></hr>
          <div className='cardLowerBody'>
            <h3>Roll No :  <span className='data-block'>{userData.roll_no}</span>  <div className='field-container'><TextField inputProps={{ className: "input-fields", name: "roll_no" }} variant="standard" size="small" value={userData.roll_no} onChange={handleInput} />
            </div>
            </h3>
            <h3>Semester : <span className='data-block'>{userData.semester}</span>   <div className='field-container'><TextField inputProps={{ className: "input-fields", name: "semester" }} style = {{width: 100}} variant="standard" size="small" value={userData.semester} onChange={handleInput} /></div>
            </h3>
            <h3>Branch :    <span className='data-block'>{userData.branch}</span> <div className='field-container'><TextField inputProps={{ className: "input-fields", name: "branch" }} variant="standard" size="small" value={userData.branch} onChange={handleInput} /></div>
            </h3>
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
              {/* <TextField inputProps={{ className: "input-fields", name: "dob" }} variant="standard" size="small" value={userData.dob} onChange={handleInput} /> */}
              <DatePicker 
              selected={userData.dob ? moment(userData.dob) : null}
              onChange={date => setUserData({...userData,dob:date})}
              className='input-fields'
              name='dob'
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
              <td className='data-block'>{userData.admission_session}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name: "admission_session" }} variant="standard" size="small" value={userData.admission_session} onChange={handleInput} />
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
              <td className='data-block'>{userData.institute_name}</td>
              <div className='field-container'>

              <TextField inputProps={{ className: "input-fields", name: "institute_name" }} variant="standard" size="small" value={userData.institute_name} onChange={handleInput} />
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

              <TextField inputProps={{ className: "input-fields", name:"pincode" }} variant="standard" size="small"  value={userData.pincode} onChange={handleInput} />
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