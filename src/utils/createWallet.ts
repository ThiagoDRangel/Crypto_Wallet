// import dependencies
import bip32 from 'bip32';
import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';

// testnet change for 'bitcoin' for mainnet
const network = bitcoin.networks.testnet;

// model wallet HD
const path = `m/49'/1'/0'/0`;

// create mnemonic words(12 words)
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

//create master node
let root = bip32.fromSeed(seed, network);

// create account node
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address;

console.log("create wallet success");
console.log('Endereço: ', btcAddress);
console.log("Chave privada: ", node.toWIF());
console.log("Seed", mnemonic);
