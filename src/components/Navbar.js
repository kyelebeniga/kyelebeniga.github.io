import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNav, setExpandNav] = useState(false);
  
  // Function that makes navbar smaller when scrolling
  const navScroll = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 100);
  }
  useEffect(() => {
    window.addEventListener('scroll', navScroll);
    return () => {
      window.addEventListener('scroll, navScroll');
    }
  }, []);

  return (
    <>
      <nav className="navbar" id={expandNav ? "open" : "close"}>
        <div className="toggleButton">
          <button
            onClick={() => {
              setExpandNav((prev) => !prev);
            }}
          >
            <ReorderIcon />
          </button>
        </div>
        <div className="links">
          <div className="logo">
            <h1>
              Kyele.<span>_</span>
            </h1>
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar