import React from "react";
import InstituteNavbar from "./InstituteNavbar";
import insLogo from "../assets/images/insLogo.png";
import insImg from "../assets/images/welcomeimg.jpg";
function InstituteProfile() {
  return (
    <div className="insProfile">
      <div>
        <InstituteNavbar />
        <br/>
        <br/>
        <br/>
      </div>
      <div className="header">
        <img src={insLogo} className="insLogo" />
        <div className="headerIns">
          <h2>JSS Mahavidyapeeth</h2>
          <h1 className="nameIns">JSS Academy of Technical Education, Noida</h1>
          <h4 className="affiliation">
            Approved by All India Council for Technical Education (AICTE), New
            Delhi.<br></br>
            UG programs are Accredited by National Board of Accreditation (NBA),
            New Delhi.<br></br>
            Affiliated to Dr APJ Abdul Kalam Technical University, Uttar
            Pradesh, Lucknow
          </h4>
        </div>
      </div>
      <hr className="horRule"></hr>
      <div className="body">
        <h1>Welcome to JSSATE, Noida</h1>
        <div className="bodyInner">
          <img src={insImg} className="insImg" />
          <p className="innerBodyText">
            JSS Academy of Technical Education Noida (JSSATEN) is one of the
            leading Technical Institutions in the National Capital Region in the
            State of Uttar Pradesh. Established in the year 1998 by JSS
            Mahavidyapeetha, Noida, the Institution has set bench marks every
            year, and grown into an Institution of Excellence in Technical
            Education. Located in the central part of NOIDA, JSSATEN has become
            a household name for its excellence in Discipline, Teaching,
            Training and Placement. Today, JSSATEN has total student strength of
            over 4000, who are mentored by more than 250 Faculty Members. The
            Campus has finest accommodation for girls and boys.
            <br />
            <p className="vision">YOUR FUTURE OF EXCELLENCE BEGINS HERE</p>
            <p className="excellenceText">
              OUR COMMITMENT TO QUALITY AND EXCELLENCE MEANS THAT WE ONLY HAVE
              TRAINED STAFF FOR INNOVATIVE TEACHING AND REALTIME LEARNING
              PROCESS
            </p>
          </p>
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
    </div>
  );
}

export default InstituteProfile;
