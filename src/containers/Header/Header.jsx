import React, { Component } from 'react';
import MenuIcon from '../../../Assets/icons/Menu-icon.svg';
import CloseIcon from '../../../Assets/icons/close-icon.svg';
import './style.css';


function Header() {
  // this.menu = document.getElementById('menu');
  // this.close = document.getElementById('close');
  // this.navbar = document.getElementById('navbar');
  // // this.navLinks = document.querySelectorAll('.nav_link');
  // MenuOpen = () => {
    
  //   this.navbar.classList.remove('hidden');
  //   this.close.classList.remove('hidden');
  //   this.menu.classList.add('hidden');
  // };

  // MenuClose = () => {
  //   this.navbar.classList.add('hidden');
  //   this.close.classList.add('hidden');
  //   this.menu.classList.remove('hidden');
  // };

  // LinkOpen = () => {
  //   this.navLinks.forEach(link => {
  //     link.addEventListener('click', () => {
  //       this.navbar.classList.add('hidden');
  //       this.menu.classList.remove('hidden');
  //       this.close.classList.add('hidden');
  //     });
  //   });
  // };

  
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
                <a href="#hero">Home</a>
              </li>
              <li className="nav_link">
                <a href="#about">About</a>
              </li>
              <li className="nav_link">
                <a href="#services">Services</a>
              </li>
              <li className="nav_link">
                <a href="#projects">Projects</a>
              </li>
              <li className="nav_link">
                <a href="#clients">Clients</a>
              </li>
              <li className="nav_link">
                <a href="#contact">Contact Us</a>
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