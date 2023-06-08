import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import "./ContactForm.css";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send('service_5lojlzg',
    'Contact_Form_Sathya18',
//'template_jaiv6x8',
//'template_np6ww1a',
templateParams,'h4moQNa7-nFrfTtVa'  )
      .then((result) => {
        console.log(result.text);
        //setStatusMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      })
      .catch((error) => {
        //console.error('Error sending message:', error);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })

        //setStatusMessage('Error sending message, please try again later.');
      });
  };

  return (
    <section id="ContactForm">
    <div className="contact-form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
    </section>
  );
};

export default ContactForm;
