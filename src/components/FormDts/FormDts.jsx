/* eslint-disable react/prop-types */
import React from 'react';
import './FormDts.css';
import SuccessfulIcon from '../../../Assets/icons/success-icon.svg';

function FormDts({ submitForm, formData, handleInputChange, submit, message }) {
  return (
    <form
      onSubmit={submitForm}
      className="flex  h-full w-full flex-col items-center justify-center gap-5 rounded-xl p-5 ring-2 ring-black"
    >
      <p className="flex gap-3 text-lg font-bold text-green-700">
        {message ? <SuccessfulIcon width={30} /> : null}
        {message}
      </p>
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
        name="mobile"
        autoComplete="tel"
        type="tel"
        placeholder="Enter Your Mobile Number..."
        required
        className="inputbox"
        value={formData.mobile}
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
        <option value="AMC">AMC</option>
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
        className="w-fit rounded-md bg-primary px-5 py-2 text-xl text-white transition-all duration-300 hover:scale-110 "
        type="submit"
      >
        {submit}
      </button>
    </form>
  );
}

export default FormDts;
