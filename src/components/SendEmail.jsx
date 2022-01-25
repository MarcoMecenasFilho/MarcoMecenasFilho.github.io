import React from 'react';
import '../style/contact.css'

export default function SendEmail() {
  return (
  <div class="container-email">
    <h1>Enviar email:</h1>
    <form target="_blank" action="https://formsubmit.co/marcomecenasfilho@gmail.com" method="POST">
      <div class="form-group">
        <div class="form-row">
          <div class="col" className="input">
            <input type="text" name="name"  class="form-control" placeholder="Full Name" required/>
          </div>
          <div class="col" className="input">
            <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
          </div>
        </div>
      </div>
      <div class="form-group" className="input">
        <textarea placeholder="Your Message" className="input" class="form-control" name="message" rows="2" required></textarea>
      </div>
      <button type="submit" className="input" class="btn btn-lg btn-dark btn-block">Enviar</button>
    </form>
  </div>
  );
}
