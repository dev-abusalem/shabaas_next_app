"use client"
import Image from "next/image";
import React , {useState} from "react";
import playbutton from '../../public/images/playbutton.svg'

export default function HeroPopup() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <a className='inline-block mt-4' href="#" onClick={() => setShowModal(true)}><Image  src={playbutton} width={110} alt='playbutton' /></a>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto md:max-w-[800px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black   h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <iframe className="md:w-[700px] md:h-[450px] w-full h-[250px]" src="https://www.youtube.com/embed/1IkY0_qONRk" title="Small Little Orange Lights | 4K Relaxing Screensaver" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}