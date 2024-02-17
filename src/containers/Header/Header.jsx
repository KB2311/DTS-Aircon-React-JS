import React from 'react';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '../../../Assets/icons/Menu-icon.svg';
import CloseIcon from '../../../Assets/icons/close-icon.svg';
import './style.css';

function Header() {
  // const menu = document.querySelectorAll('#menu');
  // const close = document.querySelectorAll('#close');
  // const navbar = document.querySelectorAll('#navbar');
  // const navLinks = document.querySelectorAll('.nav_link');
  // menu?.addEventListener('click', () => {
  //   navbar.classList.remove('hidden');
  //   close.classList.remove('hidden');
  //   menu.classList.add('hidden');
  // });

  // close?.addEventListener('click', () => {
  //   navbar.classList.add('hidden');
  //   close.classList.add('hidden');
  //   menu.classList.remove('hidden');
  // });
  // navLinks?.forEach(link => {
  //   link.addEventListener('click', () => {
  //     navbar.classList.add('hidden');
  //     menu.classList.remove('hidden');
  //     close.classList.add('hidden');
  //   });
  // });

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
            <li className="nav_link">
              <HashLink smooth to="/#hero">
                Home
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/#projects">
                Projects
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/#clients">
                Clients
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/contact#contact">
                Contact Us
              </HashLink>
            </li>
          </ul>
          <button
            // onClick={this.MenuOpen}
            type="button"
            aria-label="MenuButton"
            className="lg:hidden"
            id="menu"
          >
            <MenuIcon height={20} className="fill-white" />
          </button>
          <button
            // onClick={this.MenuClose}
            type="button"
            aria-label="CloseButton"
            className="hidden"
            id="close"
          >
            <CloseIcon height={20} className="fill-white" />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
