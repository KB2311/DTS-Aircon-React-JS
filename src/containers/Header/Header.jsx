import React from 'react';
import './style.css';

function Header() {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 bg-primary bg-opacity-85 py-2 font-bold"
      id="header"
    >
      <div className="flex items-center justify-between px-container">
        <a className="flex cursor-pointer items-center gap-5" href="#home">
          {' '}
          <img
            className="h-10 "
            src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707243196/DTS-Aircon/DTS_logo_ecaznx.png"
            alt="DTSlogo"
          />
          <h1 className=" text-lg xsm:text-2xl">DTS Aircon</h1>
        </a>
        <nav className="lg:px-10">
          <ul
            className="hidden items-center gap-10 uppercase lg:flex"
            id="navbar"
          >
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <div className="lg:hidden">Menu</div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
