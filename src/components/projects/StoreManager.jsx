import React from 'react';
import storemanager from '../../images/storemanager.gif';

export default function StoreManager() {
  return (
    <div>
      <img src={ storemanager } alt="receitas"/>
      <div className='carousel-text'>
          <h3>StoreManager</h3>
          <p>Gerenciamento de estoque</p>
          <p>Tecnologias utilizadas: JavaScript, NodeJs, Express, Mocha, Nyc, Chain, Sinon</p>
        <nav>
          <a href="https://github.com/MarcoMecenasFilho/storemanager" target="_blank" rel="noreferrer">Repositório</a>
        </nav>
      </div>
    </div>
  )
}
