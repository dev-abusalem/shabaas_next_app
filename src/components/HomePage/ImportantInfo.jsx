import Container from '@/layouts/Container'
import {SlLock} from 'react-icons/sl'
import Link from 'next/link'
import React from 'react'
const ImportantInfo = () => {
  return (
    <section className=' py-8'>
        <Container>
            <div className='w-full md:w-[950px] mx-auto'>
                
                <div className='py-3 '>
                    <div className='flex items-center gap-3'>
                    <SlLock className='text-primary md:text-6xl text-5xl ' />
                    <h1 className='text-3xl md:text-[2.7rem]'>Important information about payment scams</h1>
                    </div>
                    <ul className='py-3 text-lg md:ml-20 ml-12'>
                      <li className='pt-3 list-disc '> <strong>We will never</strong> call to ask you to send money using SHABAAS to yourself or anyone else.
                      </li>
                      <li className='pt-3  list-disc'><strong>We will never</strong> contact you via phone or text to ask for a security code.
                      </li>
                      <li className='pt-3  list-disc '>If anyone reaches out to you and asks you to send money or provide a code, it is likely a scam.
                      </li>
                      
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ImportantInfo