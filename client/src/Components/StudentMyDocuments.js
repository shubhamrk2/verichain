import React from "react";
import StudentNavbar from "./StudentNavbar";

function StudentMyDocuments() {
  return (
    <>
      <div>
        <StudentNavbar />
      </div>
      <div className="myDocBody">
        <div className="myDocCard">
          No Documents have been uploaded.
        </div>
      </div>
    </>
  );
}

export default StudentMyDocuments;
