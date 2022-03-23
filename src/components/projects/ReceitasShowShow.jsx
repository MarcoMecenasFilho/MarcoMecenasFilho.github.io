import React from 'react';
import receitasshoshow from '../../images/receitasshowshow.gif';

export default function ReceitasShowShow() {
  return (
    
    <div>
      <img src={ receitasshoshow } alt="receitas"/>
      <div className='carousel-text'>
          <p>&#127941; Projeto que mais me orgulho &#127941;</p>
          <h3>Receitas Show Show</h3>
          <p>Aplicativo de receitas</p>
          <p>Tecnologias utilizadas: JavaScript, HTML, CSS, ReactJs Hooks e BootStrap</p>
        <nav>
          <a href="https://github.com/MarcoMecenasFilho/receitasshowshow" target="_blank" rel="noreferrer">Repositório</a>
          <a href="https://receitasshowshow.vercel.app/" target="_blank" rel="noreferrer">Aplicação</a>
        </nav>
      </div>
    </div>

  )
}
