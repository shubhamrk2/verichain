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
  const handleVerify = async doc_id =>{
    try {
      console.log("shubham");
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      console.log("shubham");
      // console.log("gaurav");
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = hashContract.networks[networkId];
      const instance = new web3.eth.Contract(
        hashContract.abi,
        deployedNetwork && deployedNetwork.address
      );
     
      this.captureFile = this.captureFile.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.

      this.setState({ web3, accounts, contract: instance }, this.runMain);
      this.setState({ account: accounts[0] });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }


    await axios
      .get(
        BASE_URL +
          "verify_document/" +
          doc_id +
          "?token=" +
          localStorage.getItem("user-token")
      )
      .then((res) => {
        // console.log(res.data[0].hash);
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
                {documents &&
                  documents.map((doc) => {
                    return (
                      <div>
                        <table className="docTable">
                          <tr>
                            <th>Sr. No</th>
                            <th>Document Name</th>
                            <th>Document Type</th>
                            <th>Document Status</th>
                            <th>Action</th>
                            <th>Verify</th>
                          </tr>
                          {/* <div className="shownDetails"> */}
                          {documents.map((doc)=>{
                            return <tr>
                                    <th>{no++}</th>
                                    <th>{doc.name}</th>
                                    <th>{doc.type}</th>
                                    <th>{doc.is_verified?"Verified":"Not Verified"}</th>
                                    <th><a href={"https://ipfs.io/ipfs/"+doc.hash} target="_blank">View</a></th>
                                    <th><a href="#" onClick={() => handleVerify(doc.id)}>Verify</a></th>
                                  </tr>
                          })}
                          {/* </div> */}
                        </table>
                      </div>
                    );
                  })}
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
