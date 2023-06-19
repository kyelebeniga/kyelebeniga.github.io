import React from 'react'
import '../styles/Home.css'
import '../styles/About.css'
import jsonData from './data/project.json'

function Main() {
    jsonData.forEach((object) => {
        console.log(object);
    });
  return (
    <>
    <section className="landingContainer">
      <div className="introduction">
        <h1>Hello, I'm <span>Kyele Beniga.</span></h1>
        <h2>Developer.</h2>
      </div>
    </section>

    <section className="aboutContainer">
      <div className="about">
        <h1>About me</h1>
        <p>
          I'm an enthusiastic web developer with a strong passion for creating
          feature-rich websites. I'm open to job opportunities where I can learn
          and grow, as well as work with a team of like-minded individuals
          moving towards a common goal.
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
            <i className="devicon-github-original-wordmark" title="Github"></i>
          </li>
          <li>
            <i className="devicon-mysql-plain-wordmark" title="MySQL"></i>
          </li>
        </ul>
      </div>
    </section>

    <section className="projectContainer">
    </section>
    </>
  )
}

export default Main