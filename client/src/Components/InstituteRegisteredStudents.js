import React from "react";
import InstituteNavbar from "./InstituteNavbar";

function InstituteRegisteredStudents() {
  return (
    <>
      <div>
        <InstituteNavbar />
      </div>
      <div className="registeredBody">
        <div className="registeredCard">
          <p>No Students are registered.</p>
        </div>
      </div>
      <footer className="insFooter">
        <p>
          Address: JSS Academy of Technical Educaiton, Noida C-20/1, Sector-62,
          NOIDA, DISTT. U.P., INDIA-201301
        </p>
        <p>Email: principal@jssaten.ac.in</p>
        <p>Phone: 0120-2400104/2400115</p>
      </footer>
    </>
  );
}

export default InstituteRegisteredStudents;
