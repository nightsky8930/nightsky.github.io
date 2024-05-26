import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your email"
        />
      </div>
      <div className="mb-4">
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          rows={4}
          placeholder="Your message"
        />
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">
            Sign up for our email list for updates, promotions, and more.
          </span>
        </label>
      </div>
      <div className="flex-grow flex flex-row items-center">
        <button
          className="flex-grow flex bg-green-500 hover:bg-green-700 items-center justify-center rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
