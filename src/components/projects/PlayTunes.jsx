import React from 'react';
import playtunes from '../../images/playtunes.gif';

export default function PlayTunes() {
  return (
    <div>
      <img src={ playtunes } alt="receitas"/>
      <div className='carousel-text'>
        <h3>PlayTunes</h3>
        <p>Plataforma de músicas</p>
        <p>Tecnologias utilizadas: JavaScript, HTML, CSS e ReactJs Class</p> 
        <nav>
          <a href="https://github.com/MarcoMecenasFilho/PlayTunes" target="_blank" rel="noreferrer">Repositório</a>
          <a href="https://playtunes.vercel.app/" target="_blank" rel="noreferrer">Aplicação</a>            
        </nav>
      </div>
    </div>
  )
}
