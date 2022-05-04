import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import InstituteNavbar from "./InstituteNavbar";
import axios from "axios";
import { center } from "../constants";
import getWeb3 from "../utils/getWeb3";
import hashContract from "../contracts/Contract.json";
function InstituteRegisteredStudents() {
  let no = 1;
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
        // console.log(res.data[0].hash);
      })
      .catch((e) => console.log(e));
  };
  const handleDocStatus = async (doc_id,req_type) =>{
    await axios
      .get(
        BASE_URL +
          req_type+"_document/" +
          doc_id +
          "?token=" +
          localStorage.getItem("user-token")
      )
      .then((res) => {
        // console.log(res.data[0].hash);
        const docs = documents.map((doc)=>{
          if(doc.id===doc_id) {
            if(req_type==='verify') return {...doc,is_verified:true}
            else if(req_type==='reject') return {...doc,is_rejected:true}
          }
          else return doc
        })
        setDocuments(docs)
      })
      .catch((e) => console.log(e));
  }
  
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
                
            
          </div>  )}
          <div>
            {documents.length>0 &&
                  (
                      <div>
                        <table className="docTable">
                          <tr>
                            <th>Sr. No</th>
                            <th>Document Name</th>
                            <th>Document Type</th>
                            <th>Document Status</th>
                            <th>View</th>
                            <th>Verify</th>
                            <th>Reject</th>
                          </tr>
                          {/* <div className="shownDetails"> */}
                          {documents.map((doc)=>{
                            return <tr key={doc.id}>
                                    <th>{no++}</th>
                                    <th>{doc.name}</th>
                                    <th>{doc.type}</th>
                                    <th>{doc.is_rejected?"Rejected":(doc.is_verified?"Verified":"Not Verified")}</th>
                                    <th><a href={"https://ipfs.io/ipfs/"+doc.hash} target="_blank">View</a></th>
                                    <th>{(!doc.is_rejected && !doc.is_verified) && <a href="#" onClick={() => handleDocStatus(doc.id,"verify")}>Verify</a>}</th>
                                    <th>{!doc.is_rejected && <a href="#" onClick={() => handleDocStatus(doc.id,"reject")}>Reject</a>}</th>
                                  </tr>
                          })}
                          {/* </div> */}
                        </table>
                      </div>
                    )
                  }
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
