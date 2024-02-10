import React from 'react';
import './style.css';

function Header() {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50  px-3 py-2 font-bold"
      id="header"
    >
      <div className="flex items-center justify-between px-container">
        <div className="flex items-center gap-5">
          {' '}
          <img
            className="h-10"
            src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707243196/DTS-Aircon/DTS_logo_ecaznx.png"
            alt="DTSlogo"
          />
          <h1 className="text-2xl">DTS Aircon</h1>
        </div>
        <nav className="px-10">
          <ul className="hidden items-center gap-10 md:flex" id="navbar">
            <li className="">
              <a className="nav_link" href="#hero">
                Home
              </a>
            </li>
            <li className="">
              <a className="nav_link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav_link" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav_link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="nav_link" href="#clients">
                Clients
              </a>
            </li>
            <li>
              <a className="nav_link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="md:hidden">Menu</div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
