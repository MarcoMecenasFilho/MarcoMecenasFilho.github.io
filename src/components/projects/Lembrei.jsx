import React from 'react';
import lembrei from '../../images/lembrei.gif';


export default function Lembrei() {
  return (
    <div>
      <img src={ lembrei } alt="receitas"/>
      <div className='carousel-text'>
          <h3>Lembrei!!!</h3>
          <p>Lista de Compras</p>
          <p>Tecnologias utilizadas: JavaScript, HTML, CSS, ReactJs Hooks e BootStrap</p>
        <nav>
          <a href="https://github.com/MarcoMecenasFilho/lembrei" target="_blank" rel="noreferrer">Repositório</a>
          <a href="https://lembrei.vercel.app/" target="_blank" rel="noreferrer">Aplicação</a>
        </nav>
      </div>
    </div>
  )
}
