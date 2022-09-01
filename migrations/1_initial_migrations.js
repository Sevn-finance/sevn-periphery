const SevnRouter02 = artifacts.require("SevnRouter02");
const FACTORY_ARTIFACT  = require('../../core/build/contracts/SevnFactory.json');
module.exports = async function (deployer) {

  await deployer.deploy(SevnRouter02, FACTORY_ARTIFACT.networks["97"].address, '0xae13d989dac2f0debff460ac112a837c89baa7cd');
  let instanceRouter = await SevnRouter02.deployed();
};