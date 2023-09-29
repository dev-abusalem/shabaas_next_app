import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const OTPVerify = ({ formData, setFormData, nextStep, currentStep }) => {
  const [otp, setOtp] = useState({
    firstNum: "",
    secondNum: "",
    thirdNum: "",
    forthNum: "",
  });

  const [updateOPTValue, setUpdateOPTValue] = useState("");

  const otpValue = useSelector((state) => state.otp.otpValue);

  useEffect(() => {
    setUpdateOPTValue(otpValue);
  }, [otpValue]);

  function handleSubmit(e) {
    e.preventDefault();
    const writeOTP = otp.firstNum + otp.secondNum + otp.thirdNum + otp.forthNum;

    if (updateOPTValue == writeOTP) {
      toast.success("OTP Successfull");
      setTimeout(() => {
        nextStep();
      }, 5000);
    } else {
      toast.error("OTP Failed");
      return;
    }
  }
  console.log(updateOPTValue);
  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden ">
        <div className="relative bg-white px-6 pt-10 pb-9 mx-auto w-full  max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p className="text-semibold"> Verify Your Email</p>
              </div>
              {/* <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div> */}
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-16 h-16 ">
                      <input
                        onChange={(e) =>
                          setOtp({ ...otp, firstNum: e.target.value })
                        }
                        className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200   bg-white focus:bg-gray-50 focus:ring-1 ring-primary font-bold text-3xl px-2 "
                        type="text"
                        name=""
                        id=""
                        maxLength="1"
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        onChange={(e) =>
                          setOtp({ ...otp, secondNum: e.target.value })
                        }
                        className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200  bg-white focus:bg-gray-50 focus:ring-1 ring-primary font-bold text-3xl px-2 "
                        type="text"
                        name=""
                        id=""
                        maxLength="1"
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        onChange={(e) =>
                          setOtp({ ...otp, thirdNum: e.target.value })
                        }
                        className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200  bg-white focus:bg-gray-50 focus:ring-1 ring-primary font-bold text-3xl px-2 "
                        type="text"
                        name=""
                        id=""
                        maxLength="1"
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        onChange={(e) =>
                          setOtp({ ...otp, forthNum: e.target.value })
                        }
                        className="w-full h-full flex flex-col items-center justify-center text-center font-bold text-3xl px-2 outline-none rounded-xl border border-gray-200 bg-white focus:bg-gray-50 focus:ring-1 ring-primary"
                        type="text"
                        name=""
                        id=""
                        maxLength="1"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5">
                    <div>
                      <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-3 bg-primary hover:bg-blue-700 duration-150 border-none text-white font-semibold shadow-sm">
                        Verify Account
                      </button>
                    </div>

                    {/* <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn&apos;t recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-primary"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPVerify;
