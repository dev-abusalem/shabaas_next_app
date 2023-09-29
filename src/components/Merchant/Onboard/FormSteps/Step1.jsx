import { setOTP } from "@/redux/state/otpSlice/otpSlice";
import axios from "axios";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { setOnboard } from "@/redux/state/onboardSlice/onboardSlice";
import { useEffect } from "react";

const Step1 = ({ formData, setFormData, nextStep, currentStep }) => {
  // Value add on state
  const [clensubmerchant, setClensubmerchant] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  // const [error, setError] = useState("");

  const handleFillChange = () => {
    window.location.replace("/");
  };

  const dispatch = useDispatch();

  // const validateEmail = (email) => {
  //   const allowedDomains = ["yourbusiness.com", "anotherbusiness.com"]; // Add your allowed business domains
  //   const domain = email.split("@")[1];
  //   return allowedDomains.includes(domain);
  // };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    // if (!validateEmail(recipientEmail)) {
    //   setError("Please use a business email address.");
    //   return;
    // }

    const num = Math.floor(1000 + Math.random() * 9000);

    try {
      const otp = await axios.post("/api/sendotp", {
        recipientEmail: recipientEmail,
        otpValue: num,
      });

      toast.success("OTP sent successfully!");
      dispatch(setOTP(num));
      dispatch(
        setOnboard({
          clensubmerchant: clensubmerchant,
          recipientEmail: recipientEmail,
        })
      );

      nextStep();
    } catch (error) {
      toast.error("OTP send failed!");
    }
  };

  const isOnboard = useSelector((state) => state.onboard);

  return (
    <>
      <ToastContainer />
      <h2 className="text-xl font-bold md:text-3xl mb-6 text-center underline text-primary">
        Request a Sub-merchant account
      </h2>

      {/* {error && (
        <div className="mb-4 text-red-700 text-center p-3 bg-red-100 my-2 shadow-sm rounded">
          {error}
        </div>
      )} */}

      <div className="flex justify-between items-center mb-4 gap-2 bg-gray-300 py-[3px] px-[4px] rounded-full w-[60%] mx-auto ">
        {isOnboard.recipientEmail !== undefined &&
        isOnboard.clensubmerchant !== undefined ? (
          <div className="w-[25px] h-[25px] bg-green-700 rounded-full text-center text-white font-semibold ">
            <FaCheck className="text-white inline-block mb-[3px]" />
          </div>
        ) : (
          <div className="w-[25px] h-[25px] bg-primary rounded-full text-center text-white font-semibold ">
            1
          </div>
        )}
        <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
          2
        </div>
        <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
          3
        </div>
        <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
          4
        </div>
      </div>

      <form onSubmit={HandleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="clensubmerchant"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company/Legal Entity Name of the Sub-merchant*
          </label>
          <input
            onChange={(e) => setClensubmerchant(e.target.value)}
            value={clensubmerchant}
            type="text"
            id="clensubmerchant"
            className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary"
            placeholder="Company/Legal Entity Name of the Sub-merchant"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setRecipientEmail(e.target.value)}
            className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary"
            placeholder="Email*"
            required
          />
        </div>

        <div className="mb-6 hidden">
          <label
            htmlFor="iffillformone"
            className="none mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Don&apos;t fill this input
          </label>
          <input
            onChange={handleFillChange}
            name="iffillformone"
            value={formData.iffillformone}
            type="text"
            id="iffillformone"
            className="bg-gray-50 border-gray-300 hidden text600ay-900 w-full text-white font-medium p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary "
            placeholder="Company/Legal Entity Name of the Sub-merchant"
          />
        </div>

        <div className="flex items-center py-4 gap-6">
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

export default Step1;
