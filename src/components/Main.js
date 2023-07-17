import React, { useRef } from 'react'
import '../styles/Home.css'
import '../styles/About.css'
import '../styles/Project.css'
import jsonData from './data/project.json'
import { Framer } from './Framer'

function Main() {
// Animation variants for Framer.js
  const mainVariant = {
    hidden: {
      opacity: 0,
      y: 75
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const leftVariant = {
    hidden: {
      opacity: 0,
      x: -75
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const rightVariant = {
    hidden: {
      opacity: 0,
      x: 75
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const listVariant = {
    hidden: {
      opacity: 0,
      x: 75
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 1
      }
    },
  };



  return (
    <>
      <section className="landingContainer" id="home">
        <div className="introduction">
          <Framer variant={mainVariant}>
            <h1>
              Hello, I'm <span>Kyele Beniga.</span>
            </h1>
          </Framer>
          <Framer variant={mainVariant}>
            <h2>Developer.</h2> 
          </Framer>
        </div>
      </section>
      <section className="aboutContainer" id="about">
        <div className="about">
          <Framer variant={leftVariant}>
            <h1>About me</h1>
            <p>
              I'm an enthusiastic web developer with a strong passion for creating
              feature-rich websites. I'm open to job opportunities where I can
              learn and grow, as well as work with a team of like-minded
              individuals moving towards a common goal.
            </p>
          </Framer>
        </div>
        <div className="skills">
          <Framer variant={rightVariant}>
            <h1>Skills</h1>
            <Framer variant={listVariant}>
            <ul>
              <li>
                <i className="devicon-html5-plain" title="HTML"></i>
              </li>
              <li>
                <i className="devicon-css3-plain" title="CSS"></i>
              </li>
              <li>
                <i className="devicon-react-plain" title="React"></i>
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
            </Framer>
          </Framer>
        </div>
      </section>
      <Framer variant={mainVariant}>
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
      </Framer>
    </>
  );
}

export default Main