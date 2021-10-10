const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  console.log("Migration testnet")
  deployer.deploy(Migrations);
};
