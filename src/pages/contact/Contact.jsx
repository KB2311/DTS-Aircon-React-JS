import React from 'react';
import './contect.css';

function Contact() {
  return (
    <section className="flex px-container text-black">
      <div className="flex-1 p-5">
        <iframe
          className="rounded-xl ring-2 ring-black "
          title="DTS Aircon"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.3679411053033!2d72.57021040434282!3d23.0393336609299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e845fd6c932eb%3A0xc9b826afd043323c!2sPurneshwar%20Chamber!5e0!3m2!1sen!2sin!4v1708012735510!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex-1 p-5">
        <form className="flex h-full w-full flex-col gap-5 rounded-xl p-5 ring-2 ring-slate-500">
          <input
            id="name"
            autoComplete="name"
            type="text"
            placeholder="Enter Your Name"
            className="inputbox"
          />
          <input
            id="email"
            autoComplete="email"
            type="email"
            placeholder="Enter Your Email"
            className="inputbox"
          />
          <select name="subject" className="inputbox" id="subject">
            <optgroup>
              <option selected disabled hidden>
                Subject...
              </option>
              <option value="1">HVAC</option>
              <option value="2">FIRE FIGHTING</option>
              <option value="3">ELECTRICAL</option>
              <option value="4">PLUMBING</option>
              <option value="5">SOLAR</option>
              <option value="6">INTERIOR FITOUT</option>
            </optgroup>
          </select>
          <textarea
            className="inputbox"
            placeholder="Enter description"
            name="description"
            id="description"
            cols="30"
            rows="5"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
