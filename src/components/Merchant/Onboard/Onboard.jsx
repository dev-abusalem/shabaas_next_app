// components/MultiStepForm.js
import React, { useState } from "react";
import Step1 from "./FormSteps/Step1";
import Step2 from "./FormSteps/Step2";
import Step3 from "./FormSteps/Step3";
import Container from "@/layouts/Container";
import Preview from "./FormSteps/Preview";
import Step4 from "./FormSteps/Step4";
import Step5 from "./FormSteps/Step5";
import Step6 from "./FormSteps/Step6";
import { ToastContainer } from "react-toastify";

const Onboard = () => {
  const [formData, setFormData] = useState({
    summary: "",
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
  });

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
          <Step2
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );
      case 4:
        return (
          <Step4
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );
      case 5:
        return (
          <Step5
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );
      case 6:
        return (
          <Step6
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            currentStep={currentStep}
          />
        );
      case 7:
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
            currentStep === 7
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
