const Factory = artifacts.require('Factory.sol');
const Router = artifacts.require('Router.sol');
const Pair = artifacts.require('Pair.sol');
const Token1 = artifacts.require('Token1.sol');
const Token2 = artifacts.require('Token2.sol');

/* Only for BSC testnet ! */

module.exports = async done => {
  try {
    const accounts = await web3.eth.getAccounts()
    const amount = web3.utils.toWei('1000', 'ether')

    const factory = await Factory.at('<YOUR CONTRACT ADDRESS HERE.>');
    const router = await Router.at('<YOUR CONTRACT ADDRESS HERE.>');

    console.log('Deploying contracts...')
    const token1 = await Token1.new()
    const token2 = await Token2.new()

    console.log('Creating liquidity...')
    const pairAddress = await factory.createPair.call(token1.address, token2.address);
    const tx = await factory.createPair(token1.address, token2.address);

    console.log('Adding liquidity...')
    await token1.approve(router.address, amount);
    await token2.approve(router.address, amount);
    await router.addLiquidity(
      token1.address,
      token2.address,
      amount,
      amount,
      amount,
      amount,
      accounts[0],
      Math.floor(Date.now() / 1000) + 60 * 10
    );

    const pair = await Pair.at(pairAddress);
    const balance = await pair.balanceOf(accounts[0]);
    console.log('\nIn frontend/src/sushi/lib/constants.js scroll to CHAIN_ID 97 (bsc_testnet)')
    console.log(`Paste this ${pairAddress} LP token address into .env and supportedPools/lpAddresses`)
    console.log(`Paste this ${token1.address} Token1 address into supportedPools/tokenAddresses`)
    console.log(`Paste this ${token2.address} Token2 address into supportedPools/tokenAddresses`)
    } catch(e) {
      console.log(e);
    }
  done();
};
