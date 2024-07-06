import React, { useState } from 'react';
import wallet from '../../assets/image-wallet.png';
import { generateBitcoinWallet } from '../../utils/createWallet';
import './styles.css';


function Cards () {
  const [data, setData] = useState<string | null>(null);

  const handleGenerate = () => {
    console.log('Gerar carteira');
    const walletData = generateBitcoinWallet();
    setData(JSON.stringify(walletData));
  };

  return (
    <div className="container-generate">
      {data ? (
        <span>{data}</span>
      ) : (
        <img src={wallet} alt="wallet" />
      )}
      <span>Gerador de carteira BTC </span>
      <button onClick={handleGenerate}>Gerar</button>
    </div>
  );
}

export default Cards;