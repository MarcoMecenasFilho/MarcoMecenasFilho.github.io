import React from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import receitasshoshow from '../images/receitasshowshow.gif';
import playtunes from '../images/playtunes.gif';
import wallet from '../images/wallet.gif';

export default function Projects() {
  return (
    <div className='carousel-container'>
      <Carousel fade variant="dark" className='carousel'>
        <Carousel.Item className='carousel-card' >
          <img src={ receitasshoshow } alt="receitas"/>
          <Carousel.Caption>
            <h3>Receitas Show Show</h3>
            <p>Aplicativo de receitas</p>
          </Carousel.Caption>
          <nav>
            <a href="https://github.com/MarcoMecenasFilho/receitasshowshow" target="_blank" rel="noreferrer">Repositório</a>
            <a href="https://receitasshoshow.herokuapp.com/" target="_blank" rel="noreferrer">Aplicação</a>
          </nav>
        </Carousel.Item>
        <Carousel.Item className='carousel-card'>
        <img src={ wallet } alt="receitas"/>
          <Carousel.Caption>
            <h3>Wallet-Exchange-office</h3>
            <p>Aplicativo de câmbio e carteira digital</p>
          </Carousel.Caption>
          <nav>
            <a href="https://github.com/MarcoMecenasFilho/Wallet-Exchange-office" target="_blank" rel="noreferrer">Repositório</a>
            <a href="https://wallet-exchange-office.herokuapp.com/" target="_blank" rel="noreferrer">Aplicação</a>
          </nav>
      </Carousel.Item>
      <Carousel.Item className='carousel-card'>
      <img src={ playtunes } alt="receitas"/>
        <Carousel.Caption>
            <h3>PlayTunes</h3>
            <p>Plataforma de músicas</p>
          </Carousel.Caption>
          <nav>
            <a href="https://github.com/MarcoMecenasFilho/PlayTunes" target="_blank" rel="noreferrer">Repositório</a>
            <a href="https://playtunes.herokuapp.com/" target="_blank" rel="noreferrer">Aplicação</a>
          </nav>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
