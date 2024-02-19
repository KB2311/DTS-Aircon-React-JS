import React from 'react';
import './contect.css';

function Contact() {
  return (
    <section
      className="flex flex-col gap-4 px-container text-black md:flex-row"
      id="contact"
    >
      <div className="flex-1 py-2 xsm:p-5 md:my-5">
        <iframe
          className="h-72 w-full rounded-xl ring-2 ring-black md:h-full"
          title="DTS Aircon"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.3679411053033!2d72.57021040434282!3d23.0393336609299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e845fd6c932eb%3A0xc9b826afd043323c!2sPurneshwar%20Chamber!5e0!3m2!1sen!2sin!4v1708012735510!5m2!1sen!2sin"
          // loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex-1 py-2 xsm:p-5 md:my-5">
        <form
          id="form"
          className="flex  h-full w-full flex-col items-center justify-center gap-5 rounded-xl p-5 ring-2 ring-slate-500"
        >
          <input
            id="name"
            autoComplete="name"
            type="text"
            placeholder="Enter Your Name"
            required
            className="inputbox"
          />
          <input
            id="email"
            autoComplete="email"
            type="email"
            placeholder="Enter Your Email"
            required
            className="inputbox"
          />
          <select className="inputbox text-slate-500" required id="subject">
            <option defaultValue>Select Subject...</option>
            <option value="HVAC">HVAC</option>
            <option value="FIRE FIGHTING">FIRE FIGHTING</option>
            <option value="ELECTRICAL">ELECTRICAL</option>
            <option value="PLUMBING">PLUMBING</option>
            <option value="SOLAR">SOLAR</option>
            <option value="INTERIOR FITOUT">INTERIOR FITOUT</option>
          </select>
          <textarea
            className="inputbox"
            placeholder="Enter description"
            required
            id="description"
            cols="30"
            rows="5"
          />
          <button
            id="btn"
            className="w-fit rounded-md bg-primary px-5 py-2 text-xl text-white transition-all duration-300 hover:scale-110"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
