import React from 'react';
import './style.css';

function Header() {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-40 h-20 bg-slate-900 bg-opacity-60 backdrop-blur-sm"
      id="header"
    >
      <nav className="main-nav">
        <div className="container mx-auto px-4 lg:max-w-7xl">
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-between">
              <div className="mx-w-10 flex cursor-pointer items-center gap-5 text-2xl font-bold capitalize text-white hover:drop-shadow-lg md:text-4xl">
                <img
                  src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707243151/DTS-Aircon/DTS_logo_zcbjzf.png"
                  className="h-[3rem] w-[3rem] md:h-[3rem] md:w-[3rem]"
                  alt=""
                />
                DTS AIRCON
              </div>
              {/* mobile nav */}
              <div className="flex flex-row items-center py-4 lg:py-0">
                <div className="block text-white hover:text-black lg:hidden">
                  <button
                    type="button"
                    className="menu-mobile flex border-b-2 border-transparent px-1 py-3"
                  >
                    <span className="sr-only">Mobile menu</span>
                    <svg
                      className="open h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <svg
                      className="hidden h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      // className ="close bi bi-x-lg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              {/* nav menu */}
              <ul className="navbar qtext-sm bg- hidden w-full items-center text-center font-bold uppercase text-white lg:flex lg:flex-row lg:bg-transparent lg:text-left">
                <li className="">
                  <a
                    className="active block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#hero"
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <a
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="">
                  <a
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#service"
                  >
                    Service
                  </a>
                </li>
                <li className="">
                  <a
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li className="">
                  <a
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#clients"
                  >
                    Clients
                  </a>
                </li>
                <li className="">
                  <a
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
