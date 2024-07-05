import React from 'react';
import wallet from '../../assets/image-wallet.png';
import './styles.css';


function Cards () {
  return (
    <div className="container-generate">
      <img src={wallet} alt="wallet" />
      <span>Gerador de carteira BTC </span>
      <button>Gerar</button>
    </div>
  );
}

export default Cards;
