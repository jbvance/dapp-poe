pragma solidity ^0.5.0;

contract ProofOfExistence {
    mapping (string => bool) private proofs;

    function checkIfRegistered(string memory assetHash) public view returns (bool) {
        return proofs[assetHash];
    }

    function registerAsset(string memory assetHash) public {
        proofs[assetHash] = true;
    }

}


