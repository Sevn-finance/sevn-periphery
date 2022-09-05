const SevnRouter02 = artifacts.require("SevnRouter02");
module.exports = async function (deployer) {

  const factoryAddress = '0xB919cfF0AffaFa68D12C8219E8a4D08924Ad6eed';
  const WETH = '0xc778417E063141139Fce010982780140Aa0cD5Ab';
  await deployer.deploy(SevnRouter02, factoryAddress, WETH);
  let instanceRouter = await SevnRouter02.deployed();
};