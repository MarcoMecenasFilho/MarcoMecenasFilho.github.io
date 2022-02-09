import React, { useState } from 'react';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Home from '../components/Home';
import Contact from '../components/Contact'
import '../style/portifolio.css';

export default function  Portfolio() {
const  [page, setPage] = useState('home')

document.title = 'Marco Mecenas Filho'
  return (
    <div className='main-container'>
    <section className='btns-section'>
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('sobremim')}>Sobre Mim</button>
      <button onClick={() => setPage('projetos')}>Projetos</button>
      <button onClick={() => setPage('contato')}>Contatos</button>
    </section>
    <main className='main-content'>
      {page === 'home' && <Home />}
      { page === 'sobremim' && <AboutMe />}
      { page === 'projetos' && <Projects />}
      { page === 'contato' && <Contact />}
    </main>
  </div>
  );
}
