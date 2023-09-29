// components/MultiStepForm.js
import React, { useEffect, useState } from "react";
import Step1 from "./FormSteps/Step1";
import Step2 from "./FormSteps/Step2";
import Step3 from "./FormSteps/Step3";
import Container from "@/layouts/Container";
import Preview from "./FormSteps/Preview";
import Step4 from "./FormSteps/Step4";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import OTPVerify from "./FormSteps/OTPVerify";

const Onboard = () => {
  const [clientIp, setClientIp] = useState("");

  const [formData, setFormData] = useState({
    clensubmerchant: "",
    abnsubmerchant: "",
    iosubmerchant: "",
    websubmerchant: "",
    hsubmerchantpassddkyc: "",
    sbsbacnumpayidsetacc: "",
    payiddomsubmerchant: "",
    azupayclidasumailaddforlog: "",
    trolforthedashuser: "",
    submerchantuserexpdegImg: null,
    othercommentsReachText: "",
    clietnIp: clientIp,
  });

  useEffect(() => {
    fetchIp();
  }, [formData.summary]);

  async function fetchIp() {
    try {
      const apiUrl = "/api/getip"; // Adjust the URL as needed

      const allowedUrls = ["/api/getip"]; // Add more allowed URLs as needed
      if (!allowedUrls.includes(apiUrl)) {
        throw new Error("Invalid API URL");
      }
      // Use HTTPS
      // if (!apiUrl.startsWith("https://")) {
      //   throw new Error("API URL must use HTTPS");
      // }

      const res = await axios.get(apiUrl);
      setClientIp(res.data.ip);
    } catch (error) {
      // Proper error handling without exposing sensitive information
      console.error("An error occurred:", error.message);
    }
  }

  console.log(formData.clietnIp);

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            currentStep={currentStep}
          />
        );
      case 2:
        return (
          <OTPVerify
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );
      case 3:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );
      case 4:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );
      case 5:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );

      case 6:
        return (
          <Preview
            formData={formData}
            currentStep={currentStep}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-10">
      <ToastContainer />
      <Container>
        <div
          className={
            currentStep === 6
              ? " w-full mx-auto shadow-md rounded-lg md:p-8 p-4 overflow-x-scroll"
              : " max-w-[600px] mx-auto shadow-md rounded-lg md:p-8 p-4"
          }
        >
          {renderStep()}
        </div>
      </Container>
    </section>
  );
};

export default Onboard;
