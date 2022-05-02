import React from "react";
import StudentNavbar from "./StudentNavbar";

function StudentMyDocuments() {
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
            <th>Document Name</th>
            <th><a href="#">View</a></th>
            <th><a href="#">Delete</a></th>
          </tr>
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
