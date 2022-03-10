import React, { useState } from 'react';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Home from '../components/Home';
import Contact from '../components/Contact'
import Footer from '../components/Footer';
import '../style/portifolio.css';

export default function  Portfolio() {
const  [page, setPage] = useState('home')

function buttonColor(name) {
  if (name === page) {
    return true;
  }

  return false;
}

document.title = 'Marco Mecenas Filho'
  return (
    <div className='main-container'>
      <section className='btns-section'>
        <button className={ buttonColor('home') && 'color' } onClick={() => setPage('home')}>Home</button>
        <button className={ buttonColor('sobremim') && 'color' }onClick={() => setPage('sobremim')}>Sobre Mim</button>
        <button className={ buttonColor('projetos') && 'color' } onClick={() => setPage('projetos')}>Projetos</button>
        <button className={ buttonColor('contato') && 'color' } onClick={() => setPage('contato')}>Contatos</button>
      </section>
      <main className='main-content'>
        {page === 'home' && <Home />}
        { page === 'sobremim' && <AboutMe />}
        { page === 'projetos' && <Projects />}
        { page === 'contato' && <Contact />}
      </main>
      <Footer />
  </div>
  );
}
