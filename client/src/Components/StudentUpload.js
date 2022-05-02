import React, { Component } from "react";
import hashContract from "../contracts/Contract.json";
import getWeb3 from "../utils/getWeb3";
import ipfs from "../ipfs";
import StudentNavbar from "./StudentNavbar";
import axios from "axios";
import { BASE_URL } from "../constants";
// import "../App.css";

class StudentUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipfsHash: "",
      web3: null,
      accounts: null,
      contract: null,
      buffer: null,
    };
  }

  async componentDidMount() {
    // console.log(localStorage.getItem("reload") == 1);
    // if(localStorage.getItem("reload") == 1){
    //     localStorage.setItem("reload",0);
    //     window.location.reload();
    // }
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
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
  }

  runMain = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const ipfsHash = await contract.methods.get().call({ from: accounts[0] });

    // Update state with the result.
    this.setState({ ipfsHash });
    return ipfsHash;
  };

  captureFile(event) {
    // console.log('capture file....');
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      // console.log('buffer', this.state.buffer);
    };
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log('on submit....');
    ipfs.files.add(this.state.buffer, async (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      // console.log(this.state.contract.methods.get());

      await this.state.contract.methods
        .set(result[0].hash)
        .send({ from: this.state.account })
        .then((r) => {
          return this.setState({ ipfsHash: result[0].hash });
        });

      // localStorage.setItem("hash", result[0].hash );
      // console.log("ipfsHash", this.state.ipfsHash);
      const formData =new FormData;
      formData.append('token',localStorage.getItem('user-token'))
      formData.append('hash',this.state.ipfsHash)
      formData.append('type',document.querySelector('#selectList').value)
      axios.post(BASE_URL+'store_document',formData).then((res)=>{
        console.log(res)
      }).catch(e=>{console.log(e)})
    });
  }
  render() {
    if (!this.state.web3) {
      return <div>Please wait! Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div>
        <StudentNavbar />
        <div className="dash">
          <p>This document is stored on IPFS and the Ethereum Blockchain</p>
          <br/>
          {/* eslint-disable-next-line */}
          <h2 className="uploadDocText">Upload Document</h2>
          <select name="selectList" id="selectList">
              <option value="option 1">Educational</option> {" "}
              <option value="option 2">Government IDs</option>
              <option value="option 3">Miscellaneous</option>
          </select>
          <br/>
          <form className="uploadForm" onSubmit={this.onSubmit}>
            <input
              className="fileUpload"
              type="file"
              onChange={this.captureFile}
            />
            <div className="viewDoc">
              {this.state.ipfsHash && (
                <img
                  src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`}
                  alt="image"
                />
              )}
            </div>
            <input className="fileUploadBtn" type="submit" />
          </form>

          {/* <button><a href={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} target="_blank"></a>View</button> */}
          {/* <p>Hash: {this.state.ipfsHash}</p> */}
        </div>
      </div>
    );
  }
}

export default StudentUpload;
