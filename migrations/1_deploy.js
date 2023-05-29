const Greeter = artifacts.require("Greeter");

module.exports = async function (deployer) {
  //deploy Greeter contract
  await deployer.deploy(Greeter, "Hello BBSE 2023!");
};
