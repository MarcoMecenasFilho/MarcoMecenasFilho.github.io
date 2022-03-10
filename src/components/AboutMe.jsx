import React from 'react';
import '../style/aboutMe.css'
import me from '../images/me.gif'

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className='about-div'>
        <img src={me} className='animate__animated animate__pulse animate__infinite	' width="300px" alt="marco-foto"/>
        <article className='text-aboutme animate__animated  animate__fadeIn'>
          <p> Formado em <strong>Química com Mestrado em Agroquímica</strong>. Atualmente estou realizando o curso <strong> Full Stack de desenvolvimento web na
          @Trybe</strong>.
        </p>
        <p>Possuo conhecimento e experiência com Desenvolvimento <strong>Front-end e Back-end
          </strong>, utilizando as tecnologias <strong>Git, CSS3, HTML5, JavaScripitES6, ReactJs
          (class e functions), ContextAPI, Hooks, Redux, SQL, NodeJs, Mocha, Chai, Sinon, Docker e BootStrap</strong>.
          </p>
        <p>Para visualizar todas as minhas informações de formação e experiências profissionais anteriores.  Acessar meu {
          <a href="https://www.linkedin.com/in/marcomecenasfilho/" target="_blank">LinkeDin </a>}
        </p>
        </article>
      </div>
    </div>
  );
}
