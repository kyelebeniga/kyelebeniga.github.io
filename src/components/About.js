import React from 'react'
import '../styles/About.css'

function About() {
  return (
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
            <i class="devicon-html5-plain" title="HTML"></i>
          </li>
          <li>
            <i class="devicon-css3-plain" title="CSS"></i>
          </li>
          <li>
            <i class="devicon-laravel-plain" title="Laravel"></i>
          </li>
          <li>
            <i class="devicon-javascript-plain" title="JavaScript"></i>
          </li>
          <li>
            <i class="devicon-php-plain" title="PHP"></i>
          </li>
          <li>
            <i class="devicon-github-original-wordmark" title="Github"></i>
          </li>
          <li>
            <i class="devicon-mysql-plain-wordmark" title="MySQL"></i>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About