// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract Contract {
  string ipfsHash;

  function set(string memory x) public {
    ipfsHash = x;
  }

  function get() public view returns (string memory) {
    return ipfsHash;
  }
}
