import React,{ useEffect, useState } from "react";
import StudentNavbar from "./StudentNavbar";
import axios from "axios";
import { BASE_URL } from "../constants";
function StudentMyDocuments() {
  const [documents,setDocuments] = useState([])
  const loadDocuments = async () => {
    const user_id = localStorage.getItem('user-id');
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
  useEffect(() => {
    loadDocuments()
  }, []);
  return (
    <>
      <div>
        <StudentNavbar />
      </div>
      <br/>
      <br/>
      <div className="myDocBody">
        <div className="myDocCard">
          {/* <select>
            <option>Educational</option>
            <option>Government IDs</option>
            <option>Miscellaneous</option>
          </select> */}
          <table className="docTable">
          <tr>
            <th>Sr. No</th>
            <th>Document Type</th>
            <th><a href="#">View</a></th>
            <th><a href="#">Delete</a></th>
          </tr>
          {documents.map((i,doc)=>{
            return <tr>
                    <th>{i+1}</th>
                    <th>{doc.type}</th>
                    <th><a href="${doc.hash}">View</a></th>
                    <th><a href="#">Delete</a></th>
                  </tr>
          })}
          <tr>
            <th>Sr. No</th>
            <th>Document Name</th>
            <th><a href="https://ipfs.io/ipfs/QmPQj9sAsWsJ11EhWvaMKS3xP2VQEy2Lu4uWzsudK1KktW" target="_blank">View</a></th>
            <th><a href="#">Delete</a></th>
          </tr>
        </table>
        </div>
      </div>
    </>
  );
}

export default StudentMyDocuments;
