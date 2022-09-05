const SevnRouter02 = artifacts.require("SevnRouter02");
module.exports = async function (deployer) {

  const factoryAddress = '0xB97ba66758584b7C3F10267F6CC0cA6a4abDc3e5';
  const WETH = '0xc778417E063141139Fce010982780140Aa0cD5Ab';
  await deployer.deploy(SevnRouter02, factoryAddress, WETH);
  let instanceRouter = await SevnRouter02.deployed();
};