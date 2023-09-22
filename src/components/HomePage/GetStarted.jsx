import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import getstarted from '../../../public/images/getstart2.png'
import Accrodians from './Accrodians/Accrodians'
const GetStarted = () => {
  return (
    <section id='getstarted' className='py-8'>
        <Container>
            <div className='md:grid grid-cols-2 justify-between gap-8 py-5 items-center md:min-h-[60vh] min-h-[25vh] sm:min-h-[40vh]'>
                <div className='py-3 col-span-1'>
                    <h1 className='text-3xl md:text-[2.7rem]'>Get started</h1>
                    <h2 className='text-xl md:text-3xl py-6'>Start using SHABAAS Pay in 3 easy steps</h2>
                    <Accrodians />
                </div>
                <div className='col-span-1 flex md:justify-end justify-center'>
                  <Image src={getstarted} alt='getstarted' className=' md:min-h-[60vh] min-h-[25vh] sm:min-h-[40vh]'  />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default GetStarted