import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="navbar">
          <div className="links">
            <div className="logo">
              <h1>Kyele.</h1>
              <span>_</span>
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