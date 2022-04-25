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
          <select>
            <option>Educational</option>
            <option>Government IDs</option>
            <option>Miscellaneous</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default StudentMyDocuments;
