import React, { Component } from "react";
import hashContract from "./contracts/Contract.json";
import getWeb3 from "./utils/getWeb3";
import ipfs from "./ipfs";
import "./App.css";

class App extends Component {
  state = { ipfsHash: '', web3: null, accounts: null, contract: null, buffer: null };
  
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = hashContract.networks[networkId];
      const instance = new web3.eth.Contract(
        hashContract.abi,
        deployedNetwork && deployedNetwork.address,
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
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runMain = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const ipfsHash = await contract.methods.get().call({from: accounts[0]});

    // Update state with the result.
    this.setState({ ipfsHash });
  };

  captureFile(event){
    // console.log('capture file....');
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log('buffer', this.state.buffer);
    }
  };

  onSubmit(event){
    event.preventDefault();
    // console.log('on submit....');
    ipfs.files.add(this.state.buffer, async (error, result) => {
      if(error){
        console.log(error);
        return
      }
      console.log(this.state.contract.methods.get());
      await this.state.contract.methods.set(result[0].hash).send({ from: this.state.account }).then((r) => {
        return this.setState({ ipfsHash: result[0].hash });
      })
      
      // localStorage.setItem("hash", result[0].hash );
      console.log('ipfsHash', this.state.ipfsHash);
    })
  }
  render() {
    if (!this.state.web3) {
      return <div>Please wait! Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>VeriChain</h1>
        <p>This document is stored on IPFS and the Ethereum Blockchain</p>
        {this.state.ipfsHash && (<img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt="image"/>)}
        <h2>Upload Document</h2>
        <form onSubmit={this.onSubmit}>
          <input type='file' onChange={this.captureFile}/>
          <input type='submit'/>
        </form>
        <p>{this.state.ipfsHash}</p>
      </div>
    );
  }
}

export default App;
