import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../styles/Contact.css'

function Contact() {
    const MySwal = withReactContent(Swal)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uahbuc9', 'template_x4mfu9t', form.current, 'puI6GfbTIMWrvu0af')
      .then((result) => {
        console.log(result.text);
        if(result.text === 'OK'){
            MySwal.fire({
                title: <strong>Success</strong>,
                html: <i>Message has been sent</i>,
                icon: 'success'
            })
        }
        else{
            MySwal.fire({
                title: <strong>Failed</strong>,
                html: <i>There seems to be an error.</i>,
                icon: 'error'
            })
        }
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
    };
  return (
    <section className="contactContainer" id="contact">
        <div>
            <div className="contact-form">
            <h1>Contact</h1>
            <p>
                Feel free to contact me by using the form below and I will get
                back to you as soon as possible!
            </p>
            <form id="my-form" ref={form} onSubmit={sendEmail}>
                <label>Email</label>
                <input
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email"
                />
                <label>Message</label>
                <textarea
                type="text"
                placeholder="Enter your message"
                name="message"
                id="message"
                ></textarea>
                <input type="submit" id="my-form-button" value="Submit"></input>
            </form>
            </div>
        </div>
    </section>
  )
}

export default Contact