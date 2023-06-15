import React, { useState } from 'react';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNav, setExpandNav] = useState(false);

  return (
    <>
        <nav className="navbar" id={expandNav ? "open" : "close"}>
          <div className="links">
            <div className="logo">
              <h1>
                Kyele.<span>_</span>
              </h1>
            </div>
            <div className="toggleButton">
              <button onClick={() => {
                  setExpandNav((prev) => !prev);
                }}>
                <ReorderIcon />
              </button>
            </div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
    </>
  )
}

export default Navbar