import React, { memo } from 'react';
import PdfFile from '../../../Assets/DTS Aircon Brochure.pdf';
import './Hero.css';

function Hero() {
  return (
    <section className="h-screen xsm:pt-14" id="hero">
      <div className="flex h-full items-center justify-center text-center">
        <div className=" rounded-lg bg-black bg-opacity-65 py-8 font-bold xsm:rounded-3xl xsm:p-9 lg:w-[60%] lg:rounded-full ">
          <h2 className=" px-1 text-[6vw] text-white xsm:text-3xl lg:text-5xl">
            ❝ <span className="text-secondary">Building - The Revolution</span>{' '}
            ❞
          </h2>
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
