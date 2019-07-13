const ProofOfExistence = artifacts.require("./ProofOfExistence.sol");

module.exports = function(deployer) {
  /* Deploy your contract here with the following command */
  deployer.deploy(ProofOfExistence);
};
