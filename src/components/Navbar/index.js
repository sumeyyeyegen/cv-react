import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation bg-dark mb-5">
      <div className=' container d-flex align-items-center justify-content-center'>
        <NavLink href="/" className="brand-name">
          My CV
        </NavLink>
        <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
          <ul className='sidenav' id="side-nav">
            <li>
              <NavLink className="navLink" to="/"><i className='fas fa-home'></i> Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/experiences"><i className='fas fa-copy'></i> Deneyimler</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/skills"><i className='fas fa-id-badge'></i>Yetenekler</NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/educations"><i className='fas fa-graduation-cap'></i>Eğitimler</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar