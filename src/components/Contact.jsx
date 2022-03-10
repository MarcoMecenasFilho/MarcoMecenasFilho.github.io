import React from 'react';
import '../style/contact.css'
import SendEmail from './SendEmail';
import curriculo from '../documents/marcomecenasfilho-curriculo.pdf'
import { Button } from 'react-bootstrap';
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import whatsapp from '../images/whatsapp.png'
import cv from '../images/cv.png'

export default function Contact() {
  return <div className='main-contact'>
    <nav className='nav-contact'>
      <a href="https://www.linkedin.com/in/marcomecenasfilho/" target="_blank"><img class="icones-header" id="linkedin" src={linkedin}/></a>
      <a href="https://github.com/MarcoMecenasFilho" target="_blank"><img class="icones-header"  id="github" src={github} /></a>
      <div className='btn-curriculo'>
        <a href={ curriculo } download >
        <img src={cv}/>
        </a>   
      </div>
      <a href="https://web.whatsapp.com//send?phone=5512997205627">
        <img src={whatsapp}/>
      </a>
    </nav>
    <SendEmail />

  </div>;
}
