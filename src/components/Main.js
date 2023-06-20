import React, { useRef } from 'react'
import '../styles/Home.css'
import '../styles/About.css'
import '../styles/Project.css'
import '../styles/Contact.css'
import jsonData from './data/project.json'
import emailjs from '@emailjs/browser'

function Main() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uahbuc9', 'template_x4mfu9t', form.current, 'puI6GfbTIMWrvu0af')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset();
  };

  return (
    <>
      <section className="landingContainer" id="home">
        <div className="introduction">
          <h1>
            Hello, I'm <span>Kyele Beniga.</span>
          </h1>
          <h2>Developer.</h2>
        </div>
      </section>
      <section className="aboutContainer" id="about">
        <div className="about">
          <h1>About me</h1>
          <p>
            I'm an enthusiastic web developer with a strong passion for creating
            feature-rich websites. I'm open to job opportunities where I can
            learn and grow, as well as work with a team of like-minded
            individuals moving towards a common goal.
          </p>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <ul>
            <li>
              <i className="devicon-html5-plain" title="HTML"></i>
            </li>
            <li>
              <i className="devicon-css3-plain" title="CSS"></i>
            </li>
            <li>
              <i className="devicon-laravel-plain" title="Laravel"></i>
            </li>
            <li>
              <i className="devicon-javascript-plain" title="JavaScript"></i>
            </li>
            <li>
              <i className="devicon-php-plain" title="PHP"></i>
            </li>
            <li>
              <i
                className="devicon-github-original-wordmark"
                title="Github"
              ></i>
            </li>
            <li>
              <i className="devicon-mysql-plain-wordmark" title="MySQL"></i>
            </li>
          </ul>
        </div>
      </section>
      <section className="projectContainer" id="projects">
        <h1>Projects</h1>
        <div className="project">
          {jsonData.map((object) => (
            <div
              key={object.title}
              className={`projectCard ${object.clickable}`}
              onClick={() => {
                if (object.clickable === "clickable") {
                  window.open(object.url);
                }
              }}
            >
              <img src={object.image} alt="" />
              <div className="overlay">
                <h3>{object.title}</h3>
                <p className="stack">{object.stack.join(" • ")}</p>
                <p>{object.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
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
    </>
  );
}

export default Main