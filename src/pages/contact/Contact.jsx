/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo, useState } from 'react';
import FormDts from '../../components/FormDts/FormDts';

function Contact() {
  const [submit, setSubmit] = useState('Submit');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    description: '',
  });

  const submitForm = async e => {
    e.preventDefault();

    try {
      setSubmit('Submitting...');
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbybb55O3VS5CYHayC8PbQGI-D65ysVfUWE_np_45ZxR4Ja708aMN4d1w94WM4q0CdKR/exec',
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
        mobile: '',
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
          <FormDts
            submitForm={submitForm}
            formData={formData}
            handleInputChange={handleInputChange}
            submit={submit}
            message={message}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
