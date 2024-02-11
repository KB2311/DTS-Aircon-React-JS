import React from 'react';

function Footer() {
  return (
    <>
      <footer className="min-h-60 bg-primary">
        <div className="flex basis-48 flex-wrap  lg:pt-16 ">
          <div className="mx-auto w-40 p-5">
            <img
              className="aspect-square rounded-full lg:w-32"
              src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707675006/DTS-Aircon/uxyhypygtjn0g4t47ujh.jpg"
              alt="DTS_logo"
            />
          </div>
          <div className="flex flex-col p-5 ">
            <img
              className="mx-auto w-60"
              src="https://res.cloudinary.com/ddffgfse1/image/upload/v1707675017/DTS-Aircon/emarq7cutwndkxpw9ebv.jpg"
              alt=""
            />
            <p className="flex flex-wrap gap-3 pt-3 text-xl">
              <span className="w-fit rounded-md px-3 py-1 ring-2 ring-secondary">
                HVAC
              </span>
              <span className="w-fit rounded-md px-3 py-1 ring-2 ring-secondary">
                FIRE FIGHTING
              </span>
              <span className="w-fit rounded-md px-3 py-1 ring-2 ring-secondary">
                ELECTRICAL
              </span>
              <span className="w-fit rounded-md px-3 py-1 ring-2 ring-secondary">
                PLUMBING
              </span>
              <span className="w-fit rounded-md px-3 py-1 ring-2 ring-secondary">
                SOLAR
              </span>
              <span className="w-fit rounded-md px-3 py-1 ring-2 ring-secondary">
                INTERIOR FITOUT
              </span>
            </p>
          </div>
          <div className="mx-auto px-3 pt-3 text-3xl">
            <p className="">Social Info</p>
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
