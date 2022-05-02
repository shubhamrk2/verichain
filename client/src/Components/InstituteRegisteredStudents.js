import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import InstituteNavbar from "./InstituteNavbar";
import axios from "axios";
import { center } from "../constants";
function InstituteRegisteredStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchStudents() {
      const token = localStorage.getItem("user-token");
      await axios
        .get(BASE_URL + "fetch_students?token=" + token)
        .then((data) => {
          setStudents(data.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    fetchStudents();
  }, []);
  return (
    <>
      {loading && <div style={center}>Please Wait, fetching data !</div>}
      {!loading && (
        <>
          <div>
            <InstituteNavbar />
            <br />
            <br />
            <br />
          </div>
          <div className="registeredBody">
            {students.length === 0 && <>No Registered Students Found.</>}
            {students.length > 0 && (
              <div className="registeredCard">
                <p>No Students are registered.</p>
                <select name="selectList" id="selectList">
                  {students.map((student) => {
                    return (
                      <option value={student.id} key={student.id}>
                        {student.name}
                      </option>
                    );
                  })}
                </select>
                <button className="showDetails">Show Details</button>
              </div>
            )}
          </div>
          <footer className="insFooter">
            <p>
              Address: JSS Academy of Technical Educaiton, Noida C-20/1,
              Sector-62, NOIDA, DISTT. U.P., INDIA-201301
            </p>
            <p>Email: principal@jssaten.ac.in</p>
            <p>Phone: 0120-2400104/2400115</p>
          </footer>
        </>
      )}
    </>
  );
}

export default InstituteRegisteredStudents;
