import React from 'react';
import '../style/project.css'
import Carousel from 'react-bootstrap/Carousel'
import medalha from '../images/premio.png'

import receitasshoshow from '../images/receitasshowshow.gif';
import playtunes from '../images/playtunes.gif';
import wallet from '../images/wallet.gif';

export default function Projects() {
  return (
    <div className='carousel-container'>
      <Carousel className='carousel' fade interval={3000}>
        <Carousel.Item className='carousel-card' >
          <div>
              <img src={ receitasshoshow } alt="receitas"/>
              <div className='carousel-text'>
                  <p>&#127941; Projeto que mais me orgulho &#127941;</p>
                  <h3>Receitas Show Show</h3>
                  <p>Aplicativo de receitas</p>
                <nav>
                  <a href="https://github.com/MarcoMecenasFilho/receitasshowshow" target="_blank" rel="noreferrer">Repositório</a>
                  <a href="https://receitasshoshow.herokuapp.com/" target="_blank" rel="noreferrer">Aplicação</a>
                </nav>
              </div>
            </div>
        </Carousel.Item>
        <Carousel.Item className='carousel-card'>
          <div>
            <img src={ wallet } alt="receitas"/>
            <div className='carousel-text'>
              <h3>Wallet-Exchange-office</h3>
              <p>Aplicativo de câmbio e carteira digital</p>
              <nav>
                <a href="https://github.com/MarcoMecenasFilho/Wallet-Exchange-office" target="_blank" rel="noreferrer">Repositório</a>
                <a href="https://wallet-exchange-office.herokuapp.com/" target="_blank" rel="noreferrer">Aplicação</a>
              </nav>
            </div>
            </div>
        </Carousel.Item>
        <Carousel.Item className='carousel-card'>
          <div>
            <img src={ playtunes } alt="receitas"/>
            <div className='carousel-text'>
              <h3>PlayTunes</h3>
              <p>Plataforma de músicas</p>
              <nav>
                <a href="https://github.com/MarcoMecenasFilho/PlayTunes" target="_blank" rel="noreferrer">Repositório</a>
                <a href="https://playtunes.herokuapp.com/" target="_blank" rel="noreferrer">Aplicação</a>
              </nav>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
