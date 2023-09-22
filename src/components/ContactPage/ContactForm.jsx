"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Container from '@/layouts/Container';

const ContactForm = () => {

    const [name , setName ] = useState("")
    const [email , setEmail ] = useState("")
    const [mobile , setMobile ] = useState("")
    const [message , setMessage ] = useState("")
    const [isLoading , setIsLoading ] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if the hidden field is filled (Honeypot)
        if (e.target.website.value) {
            // Likely a bot, reject the submission
            return;
        }

        try {

        setIsLoading(true);    
        const result = await axios.post("/api/sendmail", { name : name , email:email , mobile: mobile , message: message  });
        setIsLoading(false);
        toast.success(result.data.message);      
    
        } catch (error) {
            toast.error(error)
        }
      };

      
  return (
   <section id='contact' className='contact_us_bg py-12 bg-primary'>
    <ToastContainer />
    <Container>
        <div>
        <div id="formContainer" className=' max-w-[700px] mx-auto bg-white rounded-lg'>
            
            <form  onSubmit={handleSubmit} className='p-12 shadow-md rounded-lg'>
            <h1 className='text-center text-3xl font-semibold underline text-primary'>Contact us</h1>
                <div>
                    <label htmlFor="name">Name *</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" id="name" className='border-2 focus:bg-gray-50 border-slate-500 rounded-lg outline-none px-3 py-2 w-full mb-3 focus:border-primary' required />
                </div>

                <div>
                <label htmlFor="email">Email Address *</label>
                <input onChange={(e)=>setEmail(e.target.value)} className='border-2 focus:bg-gray-50 border-slate-500 rounded-lg outline-none px-3 py-2 w-full mb-3 focus:border-primary' type="email" id="email" required />
                </div>

                <div>
                <label htmlFor="mobile">Mobile No. *</label>
                <input onChange={(e)=>setMobile(e.target.value)} required className='border-2 focus:bg-gray-50 border-slate-500 rounded-lg outline-none px-3 py-2 w-full mb-3 focus:border-primary' type="tel" id="mobile" />
                </div>


                <div>
                <label htmlFor="message">Message</label>
                <textarea onChange={(e)=>setMessage(e.target.value)} className='border-2 focus:bg-gray-50 border-slate-500 rounded-lg outline-none px-3 py-2 w-full mb-3 focus:border-primary' id="message"></textarea>
                </div>

                <div style={{ display: 'none' }}>
                    <label htmlFor="website">Website (Leave this empty)</label>
                    <input type="text" id="website" name="website" />
                </div>

                <button  type="submit" className="px-3 py-2 w-full bg-primary hover:opacity-80 duration-100 rounded-lg text-white font-semibold " id="submitFormBtn">SEND</button>
            </form>
        </div>
        </div>
    </Container>
   </section>
  )
}

export default ContactForm