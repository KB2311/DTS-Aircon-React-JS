import React, { memo } from 'react';
import PdfFile from '../../../Assets/DTS Aircon Brochure.pdf';
import './Hero.css';

function Hero() {
  return (
    <section
      className="flex h-screen flex-col items-center justify-center xsm:pt-14"
      id="hero"
    >
      <div className="flex flex-col items-center rounded-lg bg-black bg-opacity-40 py-8 font-bold xsm:rounded-3xl xsm:p-9 lg:w-[60%]">
        <div className="flex flex-col items-center gap-3">
          <img
            className="h-36 rounded-full"
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
      {/* <div className="w-full flex-1 bg-black bg-opacity-60 pt-10">
        <div className="flex w-full flex-col justify-center gap-5 py-5 text-center lg:flex-row lg:justify-between lg:text-left">
          <h2 className=" px-1 text-[6vw] font-bold text-secondary xsm:text-3xl">
            <p className="">DTS Airconditioning System.</p>{' '}
            <p>DTS Airconditioning System LLP.</p>
          </h2>
          <h2 className=" px-1 text-[6vw] font-bold text-secondary xsm:text-3xl lg:text-4xl">
            Building - The Revolution
          </h2>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img
            className="h-36"
            src="https://res.cloudinary.com/ddffgfse1/image/upload/v1708861618/DTS-Aircon/DTS_Logo_final.png"
            alt="DTSlogo"
          />
        </div>
      </div>
      <div className="flex-1 bg-red-400">2</div> */}
    </section>
  );
}

export default memo(Hero);
