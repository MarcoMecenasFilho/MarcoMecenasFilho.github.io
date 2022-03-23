import React from 'react'
import blogapi from '../../images/blogapi.gif'

export default function BlogsAPI() {
  return (
    <div>
      <img src={ blogapi } alt="receitas"/>
      <div className='carousel-text'>
          <h3>Blog API</h3>
          <p>Criação de Blog</p>
          <p>Tecnologias utilizadas: JavaScript, NodeJs, Express, Mocha,ORM Sequelize, JWT, Joi</p>
        <nav>
          <a href="https://github.com/MarcoMecenasFilho/blogapi" target="_blank" rel="noreferrer">Repositório</a>
        </nav>
      </div>
    </div>
  )
}
