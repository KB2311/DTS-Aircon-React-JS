import React from 'react';
import FacebookIcon from '../../../Assets/icons/facebook-icon.svg';
import TwitterIcon from '../../../Assets/icons/twitter-icon.svg';
import InstagramIcon from '../../../Assets/icons/instagram-icon.svg';

function Footer() {
  return (
    <>
      <footer className="min-h-60 bg-primary">
        <div className="flex flex-col flex-wrap justify-center lg:flex-row">
          <div className="mx-auto pt-5 lg:flex-1">
            <div className="mx-auto flex items-center justify-center gap-5 xsm:gap-20">
              <img
                className="aspect-square w-24 rounded-full xsm:w-36"
                src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707675006/DTS-Aircon/uxyhypygtjn0g4t47ujh.jpg"
                alt="DTS_logo"
              />
              <img
                className="w-44 xsm:w-52"
                src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707675017/DTS-Aircon/emarq7cutwndkxpw9ebv.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-wrap justify-center gap-5 px-3 py-5">
              <span className="w-fit rounded-md px-2 py-1 text-center ring-2 ring-secondary xsm:w-44">
                HVAC
              </span>
              <span className="w-fit rounded-md px-2 py-1 text-center ring-2 ring-secondary xsm:w-44">
                FIRE FIGHTING
              </span>
              <span className="w-fit rounded-md px-2 py-1 text-center ring-2 ring-secondary xsm:w-44">
                ELECTRICAL
              </span>
              <span className="w-fit rounded-md px-2 py-1 text-center ring-2 ring-secondary xsm:w-44">
                PLUMBING
              </span>
              <span className="w-fit rounded-md px-2 py-1 text-center ring-2 ring-secondary xsm:w-44">
                SOLAR
              </span>
              <span className="w-fit rounded-md px-2 py-1 text-center ring-2 ring-secondary xsm:w-44">
                INTERIOR FITOUT
              </span>
            </div>
          </div>
          <div className="mx-auto flex-1  text-center text-3xl">
            <p className=" pt-3 md:pt-20">Social Info</p>
            <div className="flex justify-center gap-10 py-10">
              <button
                aria-label="Facebook_button"
                className="transition-all duration-500 hover:scale-125"
                type="button"
              >
                <a href="#home" alt="button">
                  <FacebookIcon height={60} />
                </a>
              </button>
              <button
                aria-label="Instagram_button"
                className="transition-all duration-500 hover:scale-125"
                type="button"
              >
                <a href="#home" alt="button">
                  <InstagramIcon height={60} />
                </a>
              </button>
              <button
                aria-label="Twitter_button"
                className="transition-all duration-500 hover:scale-125"
                type="button"
              >
                <a href="#home" alt="button">
                  <TwitterIcon height={60} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center border-t-2 border-white bg-primary py-2 text-sm xsm:text-xl">
        © Copyright <span className="px-2 font-bold"> DTS Aircon.</span>All
        Rights Reserved
      </div>
    </>
  );
}

export default Footer;
