import React, { useState } from 'react';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import '../style/portifolio.css';

export default function  Portfolio() {
const  [page, setPage] = useState('sobremim')

  return (
  <div className='main-container'>
    <header>
      <h1>Marco Antonio de Mecenas Filho</h1>
      <a href="https://www.linkedin.com/in/marcomecenasfilho/" target="_blank" rel="noreferrer">
        <img class="icones-header" id="linkedin" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
      <a href="https://github.com/MarcoMecenasFilho" target="_blank" rel="noreferrer">
        <img class="icones-header"  id="github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
      </a> 
    </header>
    <section className='btns-section'>
    <button onClick={() => setPage('sobremim')}>Sobre Mim</button>
      <button onClick={() => setPage('tecnolias')}>Tecnologias</button>
      <button onClick={() => setPage('projetos')}>Projetos</button>
    </section>
    <main className='main-content'>
      { page === 'sobremim' && <AboutMe />}
      { page === 'projetos' && <Projects />}
    </main>
  </div>
  );
}
