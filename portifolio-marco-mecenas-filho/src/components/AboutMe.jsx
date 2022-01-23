import React from 'react';
import minhafoto from '../images/minhafoto.jpg'

export default function AboutMe() {
  return (
    <div className='about-me'>
      <img src={minhafoto} width="300px" alt="marco-foto"/>
      <article className='text-aboutme'>
      <p> Olá, meu nome é Marco Antonio. Brasileiro e residente na cidade de São 
        José dos Campos/SP. Atualmente estou em transição de carreira. Partindo da área Química
        para de Tecnologia. Sou estudante <strong> Full Stack de desenvolvimento web na
        @Trybe</strong>. Possuo conhecimento e experiência com Desenvolvimento <strong>Front-end
        </strong>, utilizando as tecnologias <strong>Git, CSS3, HTML5, JavaScripitES6, ReactJs
        (class e functions), ContextAPI, Hooks, Redux e BootStrap</strong>.
        </p>
        <p> Formado em <strong>Química com Mestrado em Agroquímica</strong>. Possuo conhecimentos em sistema SAP e Lean
        Six Sigma (Yellow belt). Possuo experiência em <strong>desenvolvimento de projetos de pesquisa, gestão
        de equipes, metologia ágeis (Scrum e KanBan), organização de eventos e controladoria financeira </strong>.
      </p>
      </article>
    </div>
  );
}
