import React from 'react';

const WaiverForm = () => {
  return(
    <div>
      <div className="flex-grow flex flex-col items-center px-4 py-14">
        <h1 className="text-xl mb-6">New Members will have to fill out a waiver form before start playing with the club</h1>
        <button
            className="flex-grow flex bg-green-500 hover:bg-green-700 items-center justify-center rounded-full text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
          >
            CLICK HERE TO SUBMIT WAIVER FORM
          </button>
      </div>
    </div>
  );
};

export default WaiverForm;
