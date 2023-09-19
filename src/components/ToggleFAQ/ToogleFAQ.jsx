import React, { useState } from 'react';
import {AiOutlinePlus , AiOutlineClose} from 'react-icons/ai'



const ToogleFAQ = ({ heading, description }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between items-center border-2 border-black rounded-lg text-black font-semibold p-4  cursor-pointer " onClick={toggleDescription}>
        <h2 className="cursor-pointer text-lg">
          {heading}
        </h2>
        <button
          className="text-gray-500 focus:outline-none"
          
        >
          {isDescriptionVisible ?  <AiOutlineClose className='text-primary text-lg' /> : <AiOutlinePlus className='text-primary text-lg' />} 
        </button>
      </div>
      {isDescriptionVisible && (
        <p className="mt-1 p-4  ">{description}</p>
      )}
    </div>
  );
};

export default ToogleFAQ;
