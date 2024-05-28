import React, { useState } from 'react';

const CloseIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };
  
  return (
    <svg
      onClick={handleToggle}
      className={`w-8 h-8 cursor-pointer ${
        isClicked ? 'text-green-300' : 'text-gray-500'
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
};

export default CloseIcon;
