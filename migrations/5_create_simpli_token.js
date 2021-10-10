const SimpliToken = artifacts.require('SimpliToken.sol');

module.exports = async function(deployer) {
    await deployer.deploy(SimpliToken, "Simpli Finance Token", "SIMPLI");
};
