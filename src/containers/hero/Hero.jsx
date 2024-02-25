import React, { memo } from 'react';
import PdfFile from '../../../Assets/DTS Aircon Brochure.pdf';
import './Hero.css';

function Hero() {
  return (
    <section
      className="flex h-screen items-center justify-center xsm:pt-14"
      id="hero"
    >
      <div className="flex flex-col items-center rounded-lg bg-black bg-opacity-65 py-8 font-bold xsm:rounded-3xl xsm:p-9 lg:w-[60%] lg:rounded-full ">
        <div className="flex flex-col items-center gap-3">
          <img
            className="h-36"
            src="https://res.cloudinary.com/ddffgfse1/image/upload/v1708857587/DTS-Aircon/DTS%20Final%20Logo.png"
            alt="DTSlogo"
          />
          <h2 className=" px-1 text-[6vw] text-white xsm:text-3xl lg:text-5xl">
            ❝ <span className="text-secondary">Building - The Revolution</span>{' '}
            ❞
          </h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h2 className="py-10 text-[5vw] xsm:text-xl lg:text-3xl">
            MEP & HVAC Contracting Services
          </h2>
          <a href={PdfFile} download="DTS Aircon Brochure" rel="noreferrer">
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
    </section>
  );
}

export default memo(Hero);
