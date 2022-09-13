const SevnRouter02 = artifacts.require("SevnRouter02");
module.exports = async function (deployer) {

  const factoryAddress = '0xa516a7b112F448A0D5Ad19Ed14135c01BF6B791B';
  const WETH = '0xc778417E063141139Fce010982780140Aa0cD5Ab';
  await deployer.deploy(SevnRouter02, factoryAddress, WETH);
  // let instanceRouter = await SevnRouter02.deployed();
};