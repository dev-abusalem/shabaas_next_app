// components/Step1.js

import React, { useState } from "react";
import RichTextEditorOnboard from "./RichTextEditorOnboard";
import { TbFileUpload } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";

const Step6 = ({ formData, setFormData, nextStep, currentStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // File upload and remove
  const [selectedFile, setSelectedFile] = useState(null);

  // if fill of the hide input its redirect to homepage and lock that ip
  const handleFillChange = () => {
    window.location.replace("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile === null) {
      toast.error("User Experience designs is empty");
    } else {
      nextStep();
    }
  };

  // Rich text editor

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <>
      <h2 className="text-xl font-bold md:text-3xl mb-6 text-center underline text-primary">
        Request a Sub-merchant account
      </h2>

      <div className="flex justify-between items-center mb-4 gap-2 bg-gray-300 py-[3px] px-[4px] rounded-full ">
        <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
          1
        </div>
        <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
          2
        </div>
        <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
          3
        </div>
        <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
          4
        </div>
        <div className="w-[25px] h-[25px] bg-gray-600 rounded-full text-center text-white font-semibold ">
          5
        </div>
        <div className="w-[25px] h-[25px] bg-primary rounded-full text-center text-white font-semibold ">
          6
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="submerchantuserexpdeglab"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sub-merchant User Experience designs
          </label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="submerchantuserexpdeg"
              className="flex flex-col items-center justify-center w-full h-[180px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
            >
              {selectedFile ? (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 border border-slate-300 rounded-full p-1 text-sm text-gray-500 dark:text-gray-400">
                    <TbFileUpload className="inline-block mr-2 text-2xl" />
                    {selectedFile.name}{" "}
                    <IoMdCloseCircle
                      className="ml-2 inline-block opacity-70 text-xl"
                      onClick={handleRemoveFile}
                    />
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />{" "}
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    Drag &apos;n&apos; drop some files here, or click to select
                    files
                  </p>
                  <p
                    htmlFor="submerchantuserexpdeg"
                    className="bg-gray-500 pb-[6px] pt-1 text-sm px-4 font-semibold rounded-full text-white hover:bg-primary duration-100"
                  >
                    Upload
                  </p>
                </div>
              )}
              <input
                name="submerchantuserexpdeg"
                id="submerchantuserexpdeg"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <small className="text-[10px]">
            If your Sub-Merchant is designing their own User Experience (UX) for
            PayID, please attach screenshots of this UX
          </small>
        </div>

        <div className="mb-6">
          <label
            htmlFor="othercommentsreachtxt"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Other comments
          </label>
          <textarea
            onChange={handleChange}
            name="othercommentsreachtxt"
            value={formData.othercommentsreachtxt}
            type="email"
            id="othercommentsreachtxt"
            className="bg-gray-50 border-gray-300 text-gray-900 block w-full p-2.5 text-sm rounded-lg outline-none border-2 focus:border-primary"
            placeholder="Your message"
            required
            rows="5"
          ></textarea>

          {/* <RichTextEditorOnboard /> */}
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
          {currentStep !== 1 && (
            <button
              onClick={prevStep}
              type="button"
              className="text-white bg-slate-600 hover:opacity-80 duration-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
            >
              Previous
            </button>
          )}
          <button
            type="submit"
            className="text-white bg-primary hover:opacity-80 duration-100 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-blue-800"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Step6;
