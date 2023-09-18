import React, { useState } from 'react';
import {SlArrowDown , SlArrowUp} from "react-icons/sl"




const ToogleFAQ = ({ heading, description }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between items-center bg-primary rounded-lg text-white font-semibold p-4  cursor-pointer " onClick={toggleDescription}>
        <h2 className="cursor-pointer">
          {heading}
        </h2>
        <button
          className="text-gray-500 focus:outline-none"
          
        >
          {isDescriptionVisible ?  <SlArrowUp className='text-white' /> : <SlArrowDown className='text-white' />} 
        </button>
      </div>
      {isDescriptionVisible && (
        <p className="mt-1 p-4  bg-sky-100">{description}</p>
      )}
    </div>
  );
};

export default ToogleFAQ;
