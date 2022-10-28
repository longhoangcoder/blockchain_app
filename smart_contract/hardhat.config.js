require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: 'https://eth-goerli.g.alchemy.com/v2/mxpgpvoS2Blv5dS_1CJlyYYjlR5CP2h_',
         accounts: ['e071b73bc2c5ae28ff05777d3fbbfba0834d0a7b6975b87f14cb383b166a87fe']
      }
    }
};