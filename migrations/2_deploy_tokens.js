const CAKE = artifacts.require('CAKE.sol');
const WBNB = artifacts.require('WBNB.sol');
const BUSD = artifacts.require('BUSD.sol');
const USDT = artifacts.require('USDT.sol');

module.exports = async function(deployer) {

    await deployer.deploy(CAKE);
    await deployer.deploy(WBNB);
    await deployer.deploy(BUSD);
    await deployer.deploy(USDT);

};
