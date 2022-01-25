import React from 'react';
import '../style/contact.css'
import SendEmail from './SendEmail';
import curriculo from '../documents/marcomecenasfilho-curriculo.pdf'
import { Button } from 'react-bootstrap';

export default function Contact() {
  return <div className='main-contact'>
    <nav className='nav-contact'>
      <a href="https://www.linkedin.com/in/marcomecenasfilho/" target="_blank"><img class="icones-header" id="linkedin" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
      <a href="https://github.com/MarcoMecenasFilho" target="_blank"><img class="icones-header"  id="github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
      "/></a>
      <div className='btn-curriculo'>
        <a href={ curriculo } download >
          <Button>Currículo</Button>
        </a>   
      </div>
      <a href="https://web.whatsapp.com//send?phone=5512997205627">
        <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
      </a>
    </nav>
    <SendEmail />

  </div>;
}
