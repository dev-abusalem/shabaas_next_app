"use client"

import React, { useState } from 'react'
import {AiOutlinePlus , AiOutlineMinus} from 'react-icons/ai'

const Accrodians = () => {

    const [showAcc , setShowAcc] = useState(false)
    const [showAcc2 , setShowAcc2] = useState(false)
    const [showAcc3 , setShowAcc3] = useState(false)


    return (
    <div className='mt-4 mr-2 md:mr-0 p-3 bg-slate-100 rounded-lg'>
        <div className="first_accrodian flex mb-3">
            <div className='w-1/5 px-4 py-3'>
                <h1 className='md:text-6xl text-4xl font-semibold'>01</h1>
            </div>
            <div className='w-4/5'>
                <div className="heading flex justify-between  cursor-pointer px-4 py-3" onClick={()=>setShowAcc(!showAcc)}>
                    <h2 className='font-bold'>CHOOSE YOUR BANK WITHIN THE APP</h2>
                    <span className='mt-1'>
                    {showAcc ? <AiOutlineMinus className=' text-primary' /> :
                         <AiOutlinePlus  />}
                    </span>
                </div>
                <div className={showAcc ? "h-full duration-150 body  py-2 px-4" :   " h-0 overflow-hidden duration-150 body px-4" }>
                    <p>Get started by selecting your bank account from list of banks available in SHABAAS app using ‘Add Account’ button.</p>
                </div>
            </div>
        </div>

        <div className="first_accrodian flex mb-3">
            <div className='w-1/5 px-4 py-3'>
                <h1 className='md:text-6xl text-4xl font-semibold'>02</h1>
            </div>
            <div className='w-4/5'>
                <div className="heading flex justify-between  cursor-pointer px-4 py-3" onClick={()=>setShowAcc2(!showAcc2)}>
                    <h2 className='font-bold'>LOGIN TO YOUR BANK WITHIN THE APP</h2>
                    <span className='mt-1'>
                    {showAcc2 ? <AiOutlineMinus  className=' text-primary'  /> :
                         <AiOutlinePlus/>}
                    </span>
                </div>
                <div className={showAcc2 ? "h-full duration-150 body py-2 px-4" :   " h-0 overflow-hidden duration-150 body px-4" }>
                    <p>Access your banking information by logging in to your bank account within SHABAAS app. All data is accessed in read mode mode.</p>
                </div>
            </div>
        </div>


        <div className="first_accrodian flex mb-3">
            <div className='w-1/5 px-4 py-3'>
                <h1 className='md:text-6xl text-4xl font-semibold'>03</h1>
            </div>
            <div className='w-4/5'>
                <div className="heading flex justify-between  cursor-pointer px-4 py-3" onClick={()=>setShowAcc3(!showAcc3)}>
                    <h2 className='font-bold'>DASHBOARD VIEW OF ALL ADDED ACCOUNTS</h2>
                    <span className='mt-1'>
                    {showAcc3 ? <AiOutlineMinus  className=' text-primary'  /> :
                         <AiOutlinePlus/>}
                    </span>
                </div>
                <div className={showAcc3 ? "h-full duration-150 body py-2 px-4" :   " h-0 overflow-hidden duration-150 body px-4" }>
                    <p>After successful authorisation, your bank accounts and transactional data is displayed in the dashboard of SHABAAS app. Repeat above steps to add your other bank accounts.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accrodians