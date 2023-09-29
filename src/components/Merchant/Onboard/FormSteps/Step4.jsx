// components/Step1.js

import { setOnboard } from "@/redux/state/onboardSlice/onboardSlice";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Step4 = ({ formData, setFormData, nextStep, currentStep, prevStep }) => {
  const [othercommentsreachtxt, setOthercommentsreachtxt] = useState("");
  const dispatch = useDispatch();

  // if fill of the hide input its redirect to homepage and lock that ip
  const handleFillChange = () => {
    window.location.replace("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setOnboard({
        othercommentsreachtxt: othercommentsreachtxt,
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
        {isOnboard.othercommentsreachtxt !== undefined ? (
          <div className="w-[25px] h-[25px] bg-green-700 rounded-full text-center text-white font-semibold ">
            <FaCheck className="text-white inline-block mb-[3px]" />
          </div>
        ) : (
          <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
            3
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="othercommentsreachtxt"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Other comments
          </label>
          <textarea
            onChange={(e) => setOthercommentsreachtxt(e.target.value)}
            name="othercommentsreachtxt"
            type="email"
            id="othercommentsreachtxt"
            className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary"
            placeholder="Your message"
            required
            rows="5"
          ></textarea>
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
            className="bg-gray-50 hidden border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary "
            placeholder="Company/Legal Entity Name of the Sub-merchant"
          />
        </div>

        <div className="flex items-center  py-4 gap-5">
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

export default Step4;
