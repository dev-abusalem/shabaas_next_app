import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Preview = ({ formData, prevStep, currentStep }) => {
  // Onboard Redux
  const isOnboard = useSelector((state) => state.onboard);
  console.log(isOnboard);

  const handleSubmitOnboard = () => {
    Swal.fire({
      title: "Are you sure you want to send request ?",
      text: "You can check everthing if you want",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want to send",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Send !", "Your file has been send .");
      }
      const apiUrl = "/api/onboard"; // Adjust the URL as needed

      const allowedUrls = ["/api/getip"]; // Add more allowed URLs as needed
      if (!allowedUrls.includes(apiUrl)) {
        throw new Error("Invalid API URL");
      }
      const res = axios.post(apiUrl, {
        clensubmerchant: formData.clensubmerchant,
        abnsubmerchant: formData.abnsubmerchant,
        iosubmerchant: formData.iosubmerchant,
        websubmerchant: formData.websubmerchant,
        hsubmerchantpassddkyc: formData.hsubmerchantpassddkyc,
        sbsbacnumpayidsetacc: formData.sbsbacnumpayidsetacc,
        payiddomsubmerchant: formData.payiddomsubmerchant,
        azupayclidasumailaddforlog: formData.azupayclidasumailaddforlog,
        trolforthedashuser: formData.trolforthedashuser,
        submerchantuserexpdegImg: formData.submerchantuserexpdegImg,
        othercommentsReachText: formData.othercommentsReachText,
        clietnIp: formData.clietnIp,
      });
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold md:text-3xl mb-7 text-center underline text-primary">
        Review Your Form
      </h2>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="text-center">
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Azupay email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      ABN
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Operation
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Website
                    </th>
                    <th scope="col" className="px-6 py-4">
                      KYC process?
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Comments
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b dark:border-neutral-500 text-center">
                    <td className="whitespace-nowrap px-6 py-4">
                      {isOnboard.clensubmerchant}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {isOnboard.recipientEmail}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {isOnboard.abnsubmerchant}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {isOnboard.iosubmerchant}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {isOnboard.websubmerchant}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {isOnboard.hsubmerchantpassddkyc}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {isOnboard.othercommentsreachtxt}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex items-center py-4 gap-5">
                <button
                  type="button"
                  className="text-white bg-green-700 hover:opacity-80  duration-100 focus:ring-4 focus:outline-none focus:ring-green-700 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-700 dark:focus:ring-green-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
