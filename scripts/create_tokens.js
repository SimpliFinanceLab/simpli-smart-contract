const CAKE = artifacts.require('CAKE.sol');
const WBNB = artifacts.require('WBNB.sol');
const BUSD = artifacts.require('BUSD.sol');
const USDT = artifacts.require('USDT.sol');

module.exports = async done => {
  try {
    const accounts = await web3.eth.getAccounts()
    const amount = web3.utils.toWei('1000000', 'ether')

    console.log('Deploying contracts...')
    const cake = await CAKE.new()
    const wbnb = await WBNB.new()
    const busd = await BUSD.new()
    const usdt = await USDT.new()

    console.log(`CAKE ADDRESS: ${cake.address}`)
    console.log(`WBNB ADDRESS: ${wbnb.address}`)
    console.log(`BUSD ADDRESS: ${busd.address}`)
    console.log(`USDT ADDRESS: ${usdt.address}`)

    } catch(e) {
      console.log(e);
    }
  done();
};
