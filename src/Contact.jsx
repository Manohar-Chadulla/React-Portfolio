import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact1.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m1vs6rc', 'template_6j9ja4m', form.current, {
        publicKey: 'QR8yUi76sVA09Dy_H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Form Send Succefully")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };


 return (
  
  < div className="contact-container">
    <div><h2>Contact Me</h2></div>
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-group">
      <label>Name</label>
      <input type="text" name="user_name" />
      </div>
      <div className="form-group">
      <label>Email</label>
      <input type="email" name="user_email" />
      </div>
      <div className="form-group">
      <label>Message</label>
      <textarea name="message" />
      </div>
      <button className="send-btn" type="submit" value="Send">Submit</button>
    </form>
  </div>
  );
};

export default Contact
