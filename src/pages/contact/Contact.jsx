/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './contect.css';

function Contact() {
  const [submit, setSubmit] = useState('Submit');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  const submitForm = async e => {
    e.preventDefault();

    try {
      setSubmit('Submitting...');
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbxGOVbA5g3ABFF0bEGSCWBbYVJkKVyEl83BugsrtK5XxL2-qLZvGALVxXOrHOZSCiB24Q/exec',
        {
          method: 'POST',
          body: new FormData(e.target),
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      console.log('Form submission response:', data);

      // Clear form fields on successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        description: '',
      });
      setSubmit('Submit');
      setMessage('Your Data Saved Successfully......');
      setTimeout(() => {
        setMessage('');
      }, 5000);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      className="flex flex-col gap-4 px-container text-black"
      id="contact"
    >
      <h2 className="section_title">
        Contact <span>US</span>
      </h2>
      <div className="flex flex-col md:flex-row">
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
            onSubmit={submitForm}
            className="flex  h-full w-full flex-col items-center justify-center gap-5 rounded-xl p-5 ring-2 ring-slate-500"
          >
            <p className="text-lg font-bold text-green-700">{message}</p>
            <input
              name="name"
              autoComplete="name"
              type="text"
              placeholder="Enter Your Name"
              required
              className="inputbox"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              name="email"
              autoComplete="email"
              type="email"
              placeholder="Enter Your Email"
              required
              className="inputbox"
              value={formData.email}
              onChange={handleInputChange}
            />
            <select
              value={formData.subject}
              onChange={handleInputChange}
              name="subject"
              className="inputbox text-slate-500"
              required
            >
              <option defaultValue>Select Subject...</option>
              <option value="HVAC">HVAC</option>
              <option value="FIRE FIGHTING">FIRE FIGHTING</option>
              <option value="ELECTRICAL">ELECTRICAL</option>
              <option value="PLUMBING">PLUMBING</option>
              <option value="SOLAR">SOLAR</option>
              <option value="INTERIOR FITOUT">INTERIOR FITOUT</option>
            </select>
            <textarea
              name="description"
              className="inputbox"
              placeholder="Enter description"
              required
              cols="30"
              rows="5"
              value={formData.description}
              onChange={handleInputChange}
            />
            <button
              className="w-fit rounded-md bg-primary px-5 py-2 text-xl text-white transition-all duration-300 hover:scale-110"
              type="submit"
            >
              {submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
