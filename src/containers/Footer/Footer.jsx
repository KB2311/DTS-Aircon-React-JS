import React from 'react';
import FacebookIcon from '../../../Assets/icons/facebook-icon.svg';
import TwitterIcon from '../../../Assets/icons/twitter-icon.svg';
import InstagramIcon from '../../../Assets/icons/instagram-icon.svg';
import MapIcon from '../../../Assets/icons/maps-icon.svg';
import WatsappIcon from '../../../Assets/icons/whatsapp-icon.svg';
import ClickIcon from '../../../Assets/icons/click-icon.svg';
import MailIcon from '../../../Assets/icons/mail-icon.svg';

function Footer() {
  return (
    <>
      <footer className="min-h-60 bg-primary">
        <div className="flex flex-col flex-wrap justify-center lg:flex-row">
          <div className="mx-auto pt-5 lg:flex-1">
            <div className="mx-auto flex items-center justify-center gap-5 xsm:gap-20">
              <a href="#home">
                <img
                  className="aspect-square w-24 cursor-pointer rounded-full xsm:w-36"
                  src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707675006/DTS-Aircon/uxyhypygtjn0g4t47ujh.jpg"
                  alt="DTS_logo"
                />
              </a>
              <img
                className="w-44 cursor-pointer xsm:w-52"
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
          <div className="mx-auto flex-1 px-2 text-center">
            <div className="flex flex-col gap-5 pt-5 text-lg xsm:gap-2">
              <div className="flex items-center gap-5">
                <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-primary-2 px-2">
                  <MapIcon className="w-4 fill-white " />
                </div>
                <p className="flex-wrap text-justify">
                  2/B, Purneshwar Chamber, Opp. Dinesh Hall, Ashram Road,
                  Ahmedabad-380009
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-primary-2">
                  <MailIcon className="w-5 fill-white " />
                </div>
                <a
                  href="mailto:dtsairconsystem@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  dtsairconsystem@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-primary-2">
                  <ClickIcon className="w-3 fill-white " />
                </div>
                <a href="www.dtsaircon.com" alt="dts_link">
                  www.dtsaircon.com
                </a>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-primary-2">
                  <WatsappIcon className="w-4 fill-white " />
                </div>
                <p>9925791575 | 99130 21374</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center gap-10 py-5 md:justify-start lg:pt-10">
                <button
                  aria-label="Facebook_button"
                  className="transition-all duration-500 hover:scale-125"
                  type="button"
                >
                  <a href="#home" alt="button">
                    <FacebookIcon height={40} />
                  </a>
                </button>
                <button
                  aria-label="Instagram_button"
                  className="transition-all duration-500 hover:scale-125"
                  type="button"
                >
                  <a href="#home" alt="button">
                    <InstagramIcon height={40} />
                  </a>
                </button>
                <button
                  aria-label="Twitter_button"
                  className="transition-all duration-500 hover:scale-125"
                  type="button"
                >
                  <a href="#home" alt="button">
                    <TwitterIcon height={40} />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex cursor-pointer items-center justify-center border-t-2 border-white bg-primary py-2 text-sm xsm:text-xl">
        © Copyright <span className="px-2 font-bold"> DTS Aircon.</span>All
        Rights Reserved
      </div>
    </>
  );
}

export default Footer;
