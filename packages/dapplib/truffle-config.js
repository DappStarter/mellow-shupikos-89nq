require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index rifle peace puppy harvest fork system gate'; 
let testAccounts = [
"0x0008c7d58c23140786c2a704d93b6b199ecc8b1c3ddbabeb6afa2822345e8dd0",
"0xc29933fefbf7fd78606cba57327740e755b2f5c73bb8d7f53cbfa5e54a470aee",
"0x89654855902925a366f3c6728466e5809e8d8c3d6cd7d9ff5eb3df22b55ffb51",
"0x74b20d10ba9705e3c095ba4776b7c120c8376c05abee5c4a669e5d17920a1c9d",
"0xe68a705ebfffb98aa9acf3103ec7b3887739ac9c8c224219c6afb2a513c913e1",
"0x9f5a37c195364384839b64fd22a35daa5f80a31fd92bb54e4db9dcda93ea7e49",
"0xc2e4ef0ffe4aa7cfa82192cace3678c39857473c481922c5d00954a872e7813e",
"0x8d25cdd01a3311bee6bef5c59630c91f68c2aa37d48768edcab3a87e99980965",
"0x770fbaed744ba858efb63baebc262857a32e381eb8dc5ad700b0f2d109000035",
"0x73d4d124446731cab014a83f36d8137d25e42590f54cb48ba005da74b4d6b712"
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

