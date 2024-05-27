import React from 'react';

const WaiverForm = () => {
  return(
    <div className="flex-grow flex flex-col items-center py-14">
      <h1 className="text-xl  mb-6">New Members will have to fill out a waiver form before starting with the club</h1>
      <button
          className="flex-grow flex bg-green-500 hover:bg-green-700 items-center justify-center rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          CLICK HERE TO SUBMIT WAIVER FORM
        </button>
    </div>
  );
};

export default WaiverForm;
