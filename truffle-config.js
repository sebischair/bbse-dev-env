require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    sepolia: {
      provider: function () {
        return new HDWalletProvider({
          privateKeys: [process.env.PRIVATE_KEY_1],
          providerOrUrl: process.env.SEPOLIA_RPC_ENDPOINT,
          numberOfAddresses: 1,
        });
      },
      network_id: 11155111,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.15", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
