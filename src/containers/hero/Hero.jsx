import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="h-screen pt-14" id="hero">
      <div className="flex h-full items-center justify-center text-center">
        <div className=" bg-black bg-opacity-65 py-3 font-bold xsm:rounded-3xl xsm:p-9 lg:rounded-full ">
          <h2 className=" px-1 pt-5 text-[7vw] text-white xsm:text-3xl lg:text-5xl">
            ❝ <span className="text-secondary">Building - The Revolution</span>{' '}
            ❞
          </h2>
          <h2 className="py-10 text-[5vw] xsm:text-xl lg:text-3xl">
            MEP & HVAC Contracting Services
          </h2>
          <a
            href="https://ik.imagekit.io/b8au2iwe2/DTS%20Aircon%20Images/DTS%20Brochure%20Final.pdf?updatedAt=1707572697810"
            download="DTS Aircon Brochure"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="rounded-full px-4 py-2 text-base uppercase text-white ring-2 ring-white xsm:text-lg lg:text-xl"
              type="button"
              id="get_Brochure"
            >
              Get Brochure
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
