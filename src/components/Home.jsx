import React from 'react';
import '../style/home.css'
import home from '../images/home.gif'
import 'animate.css';

export default function Home() {
  return <div className='home-container'>
    <div className='home-align ' >
      <img src={ home }  alt='logo' />
      <div className='home-text'>
        <h1>Olá, tudo bom? </h1>
        <p className='type-simple'>Sou o <span className='span-name'>Marco Mecenas Filho</span></p>
        <p className='type-simple'>Desenvolvedor <span className='span-name'> Full-Stack</span></p>
        <p>Seja bem vindo(a) ao meu portifólio</p>
        <h5>Teve uma grande ideia e não sabe como fazer ? </h5>
        <h5 className='type-simple span-name'> Eu posso te ajudar</h5>
      </div>
    </div>
  </div>;
}
