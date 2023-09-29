// components/Step1.js
import { setOnboard } from "@/redux/state/onboardSlice/onboardSlice";
import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Step3 = ({ formData, setFormData, nextStep, currentStep, prevStep }) => {
  const [websubmerchant, setWebsubmerchant] = useState("");
  const [hsubmerchantpassddkyc, setHsubmerchantpassddkyc] = useState("");

  // if fill of the hide input its redirect to homepage and lock that ip
  const handleFillChange = () => {
    window.location.replace("/");
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setOnboard({
        websubmerchant: websubmerchant,
        hsubmerchantpassddkyc: hsubmerchantpassddkyc,
      })
    );
    nextStep();
  };

  // Onboard Redux
  const isOnboard = useSelector((state) => state.onboard);

  return (
    <>
      <h2 className="text-xl font-bold md:text-3xl mb-6 text-center underline text-primary">
        Request a Sub-merchant account
      </h2>

      <div className="flex justify-between items-center mb-4 gap-2 bg-gray-300 py-[3px] px-[4px] rounded-full w-[60%] mx-auto  ">
        {isOnboard.recipientEmail !== undefined &&
        isOnboard.clensubmerchant !== undefined ? (
          <div className="w-[25px] h-[25px] bg-green-700 rounded-full text-center text-white font-semibold ">
            <FaCheck className="text-white inline-block mb-[3px]" />
          </div>
        ) : (
          <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
            1
          </div>
        )}
        {isOnboard.abnsubmerchant !== undefined &&
        isOnboard.iosubmerchant !== undefined ? (
          <div className="w-[25px] h-[25px] bg-green-700 rounded-full text-center text-white font-semibold ">
            <FaCheck className="text-white inline-block mb-[3px]" />
          </div>
        ) : (
          <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
            2
          </div>
        )}
        {isOnboard.websubmerchant !== undefined &&
        isOnboard.hsubmerchantpassddkyc !== undefined ? (
          <div className="w-[25px] h-[25px] bg-green-700 rounded-full text-center text-white font-semibold ">
            <FaCheck className="text-white inline-block mb-[3px]" />
          </div>
        ) : (
          <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
            3
          </div>
        )}
        <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
          4
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="websubmerchant"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Website of the Sub-merchant
          </label>
          <input
            onChange={(e) => setWebsubmerchant(e.target.value)}
            name="websubmerchant"
            type="url"
            id="websubmerchant"
            className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary"
            placeholder="http://example.com"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="hsubmerchantpassddkyc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Has the Sub-merchant passed your due-diligence and KYC process ?
          </label>
          <select
            onChange={(e) => setHsubmerchantpassddkyc(e.target.value)}
            name="hsubmerchantpassddkyc"
            id="hsubmerchantpassddkyc"
            className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary"
            required
          >
            <option className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary">
              Select your KYC process
            </option>
            <option
              className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary"
              value="Yes"
            >
              Yes
            </option>
            <option
              className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary"
              value="No"
            >
              No
            </option>
          </select>
        </div>

        <div className="mb-6 hidden">
          <label
            htmlFor="iffillformone"
            className="none mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Dont fill this input
          </label>
          <input
            onChange={handleFillChange}
            name="iffillformone"
            value={formData.iffillformone}
            type="text"
            id="iffillformone"
            className="bg-gray-50 border-gray-300 hidden text-gray-900 w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary "
            placeholder="Company/Legal Entity Name of the Sub-merchant"
          />
        </div>

        <div className="flex items-center py-4 gap-5">
          {/* {currentStep !== 1 && (
            <button
              onClick={prevStep}
              type="button"
              className="text-white bg-slate-600 hover:opacity-80 duration-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
            >
              Previous
            </button>
          )} */}
          <button
            type="submit"
            className="text-white bg-primary hover:opacity-80 duration-100 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default Step3;
