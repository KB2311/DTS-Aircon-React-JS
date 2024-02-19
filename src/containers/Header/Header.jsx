import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '../../../Assets/icons/Menu-icon.svg';
import CloseIcon from '../../../Assets/icons/close-icon.svg';
import './style.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const ToggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 bg-primary bg-opacity-85 py-2 font-bold"
      id="header"
    >
      <div className="relative flex items-center justify-between px-container">
        <a
          className="flex w-fit cursor-pointer items-center gap-3"
          href="#home"
        >
          {' '}
          <img
            className="h-10 "
            src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707243196/DTS-Aircon/DTS_logo_ecaznx.png"
            alt="DTSlogo"
          />
          <h1 className="flex w-fit items-center justify-center text-xl">
            DTS Aircon
          </h1>
        </a>
        <nav
          className={`absolute left-0 right-0 top-12 bg-primary bg-opacity-85  py-5 text-lg lg:static lg:block lg:bg-opacity-0 lg:pt-0 ${!isNavOpen ? 'hidden' : 'block'}`}
        >
          <ul
            className="flex flex-col items-center justify-center gap-10 px-10 lg:flex-row lg:justify-end"
            id="navbar"
          >
            <li className="nav_link">
              <HashLink smooth to="/#hero" onClick={ToggleMenu}>
                Home
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/#about" onClick={ToggleMenu}>
                About
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/#services" onClick={ToggleMenu}>
                Services
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/#projects" onClick={ToggleMenu}>
                Projects
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/#clients" onClick={ToggleMenu}>
                Clients
              </HashLink>
            </li>
            <li className="nav_link">
              <HashLink smooth to="/contact#contact" onClick={ToggleMenu}>
                Contact Us
              </HashLink>
            </li>
          </ul>
        </nav>
        <button
          onClick={ToggleMenu}
          type="button"
          aria-label="MenuButton"
          className={`lg:hidden ${isNavOpen ? 'hidden' : 'block'}`}
          id="menu"
        >
          <MenuIcon height={20} className="fill-white" />
        </button>
        <button
          onClick={ToggleMenu}
          type="button"
          aria-label="CloseButton"
          className={` ${isNavOpen ? 'block' : 'hidden'}`}
          id="close"
        >
          <CloseIcon height={20} className="fill-white" />
        </button>
      </div>
    </header>
  );
}

export default Header;
