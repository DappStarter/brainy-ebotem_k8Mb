require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow fog table name razor meadow update grace hat army general'; 
let testAccounts = [
"0x5713dd3905e7a0b496afc200914b43100c91b5303a99fee2197b2f5ed2c7db87",
"0xd989129193f0e237d73a4f1f8584c64142f3b7f45e42f75072a2a56b11e649ab",
"0x6f981b52068193a77e7933f13ff27acee7620036fd425fc11ea5814971564c69",
"0xed6d3ea6da59fe0dc191164fe728824bbdca729e6459354d841ee6597d63ba96",
"0x265e3c9c54ff67d1b8dd0a95cdac6f4f0e88aca1784cf871f52515c9e955e2f1",
"0x4a060ca5a8bb3b37081071c9d42b446cb02238d5ab25f54a4b301fdfc786990a",
"0xe22bc02bd661e9a955e302bca01f2b30a9a6158a0ac73461f68cfe48bb2d72d9",
"0x8e1afdf1ad190bdd828b607c3ad9788c4ff25e62d9ad73b8fa0fe12d14aecb5c",
"0x16c94a58582c58635ab0f658ed47adbe1a8e5d9335bb52b905a2a5957886eab7",
"0x6a947ade143e9065f533d70a6a6190cb97ff452a21f2903fd15f8ea3420cf156"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

