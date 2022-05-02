import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import InstituteNavbar from "./InstituteNavbar";
import axios from "axios";
import { center } from "../constants";
function InstituteRegisteredStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);
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
  const loadDocuments = async () => {
    const user_id = document.querySelector("#selectList").value;
    await axios
      .get(
        BASE_URL +
          "get_documents/" +
          user_id +
          "?token=" +
          localStorage.getItem("user-token")
      )
      .then((res) => {
        setDocuments(res.data);
        console.log(res.data[0].hash);
      })
      .catch((e) => console.log(e));
  };
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
              <div className="showDetailsBtn">
                {/* <p>No Students are registered.</p> */}
                <select name="selectList" id="selectList">
                  {students.map((student) => {
                    return (
                      <option value={student.id} key={student.id}>
                        {student.name}
                      </option>
                    );
                  })}
                </select>
                <button onClick={loadDocuments} className="showDetails">
                  Show Details
                </button>
                {documents &&
                  documents.map((doc) => {
                    return (
                      <div>
                        {doc.type} {doc.hash}
                      </div>
                    );
                  })}
              </div>
            )}
            <div className="registeredCard">
            <table className="docTable">
              <tr>
                <th>Sr. No</th>
                <th>Document Name</th>
                <th>
                  {/* <a href={`https://ipfs.io/ipfs/${doc.hash}`}>View</a> */}
                  <a href="https://ipfs.io/ipfs/QmPQj9sAsWsJ11EhWvaMKS3xP2VQEy2Lu4uWzsudK1KktW">View</a>
                </th>
                <th>
                  <a href="#">Verify</a>
                </th>
              </tr>
            </table>
            </div>
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
