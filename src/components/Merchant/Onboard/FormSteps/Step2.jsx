// components/Step1.js
import React from 'react';

const Step2 = ({ formData, setFormData, nextStep , currentStep , prevStep}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // if fill of the hide input its redirect to homepage and lock that ip 
  const handleFillChange = () =>{

    window.location.replace( '/');

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      
        <h2 className='text-xl font-bold md:text-3xl mb-6 text-center underline text-primary'>Request a Sub-merchant account</h2>
       
        <div className='flex justify-center items-center mb-4 gap-2 '>
         <div className='w-[18px] h-[18px] bg-primary rounded-full '></div>
         <div className='w-[18px] h-[18px] bg-primary rounded-full '></div>
         <div className='w-[18px] h-[18px] bg-gray-400 rounded-full '></div>
         <div className='w-[18px] h-[18px] bg-gray-400 rounded-full '></div>
         <div className='w-[18px] h-[18px] bg-gray-400 rounded-full '></div>
         <div className='w-[18px] h-[18px] bg-gray-400 rounded-full '></div>
       </div>

<form onSubmit={handleSubmit}>

<div className="mb-6">
    <label htmlFor="abnsubmerchant" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ABN of the Sub-merchant*</label>
    <input onChange={handleChange} name="abnsubmerchant" value={formData.abnsubmerchant} type="text" id="abnsubmerchant" className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary" placeholder="ABN of the Sub-merchant" required />
  </div>


  <div className="mb-6">
    <label htmlFor="iosubmerchant" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry of Operation of the Sub-merchant*</label>
    <input onChange={handleChange} name="iosubmerchant" value={formData.iosubmerchant} type="text" id="iosubmerchant" className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary" placeholder="Industry of Operation of the Sub-merchant" required />
  </div>

  <div className="mb-6 hidden" >
          <label htmlFor="iffillformone"  className="none mb-2 text-sm font-medium text-gray-900 dark:text-white">Dont fill this input</label>
          <input onChange={handleFillChange} name="iffillformone" value={formData.iffillformone} type="text" id="iffillformone" className="bg-gray-50 border-gray-300 hidden text-gray-900 w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary " placeholder="Company/Legal Entity Name of the Sub-merchant" />
  </div>
  
  <div className='flex items-center py-4 gap-5'>

  {currentStep !== 1 && (
                <button onClick={prevStep} type="button" className="text-white bg-slate-600 hover:bg-slate-500 duration-100 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Previous</button>
            )}
  <button type="submit" className="text-white bg-primary hover:opacity-80 duration-100 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800">Next</button>

  </div>
</form>

    </>
  );
};

export default Step2;
