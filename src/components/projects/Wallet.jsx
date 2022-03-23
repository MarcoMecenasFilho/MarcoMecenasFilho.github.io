import React from 'react';
import wallet from '../../images/wallet.gif';

export default function Wallet() {
  return (
    <div>
      <img src={ wallet } alt="receitas"/>
      <div className='carousel-text'>
        <h3>Wallet-Exchange-office</h3>
        <p>Aplicativo de câmbio e carteira digital</p>
        <p>Tecnologias utilizadas: JavaScript, ReactJs Class, Redux, Jest, HTML, CSS e BootStrap</p>
        <nav>
          <a href="https://github.com/MarcoMecenasFilho/Wallet-Exchange-office" target="_blank" rel="noreferrer">Repositório</a>
          <a href="https://wallet-exchange-office.vercel.app/" target="_blank" rel="noreferrer">Aplicação</a>
        </nav>
      </div>
    </div>
  )
}
