import React from 'react';
import '../style/home.css'
import home from '../images/home.gif'

export default function Home() {
  return <div className='home-container'>
    <div className='home-align'>
      <img src={ home } alt='logo' />
      <div className='home-text'>
        <h1>Olá, tudo bom? </h1>
        <p>Sou o Marco Mecenas Filho</p>
        <p>Desenvolvedor Full-Stack</p>
        <p>Seja bem vindo(a) ao meu portifólio</p>
        <h5>Teve uma grande ideia e não sabe como fazer ? Eu posso te ajudar</h5>
      </div>
    </div>
  </div>;
}
