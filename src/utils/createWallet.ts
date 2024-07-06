// Importar dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Definir a rede de teste para Bitcoin
const network = bitcoin.networks.testnet;

// Modelo de carteira HD
const path = `m/49'/1'/0'/0`;

// Função para gerar a carteira Bitcoin
export function generateBitcoinWallet() {
    // Gerar palavras de mnemônica (12 palavras)
    let mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);

    // Criar nó mestre
    let root = bip32.fromSeed(seed, network);

    // Criar nó da conta
    let account = root.derivePath(path);
    let node = account.derive(0).derive(0);

    let btcAddress = bitcoin.payments.p2pkh({
        pubkey: node.publicKey,
        network: network,
    }).address;

    // Registrar as informações no console
    console.log("Carteira criada com sucesso");
    console.log('Endereço BTC:', btcAddress);
    console.log("Chave privada:", node.toWIF());
    console.log("Mnemônica:", mnemonic);

    // Retornar os dados como um objeto
    return {
        address: btcAddress,
        privateKey: node.toWIF(),
        mnemonic: mnemonic
    };
}

