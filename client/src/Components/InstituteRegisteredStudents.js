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
          {/* <p>No Students are registered.</p> */}
          <select name="selectList" id="selectList">
              <option value="option 1">Student 1</option> {" "}
            <option value="option 2">Student 2</option>
          </select>
          <button className="showDetails">Show Details</button>
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
