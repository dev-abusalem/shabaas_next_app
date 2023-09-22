import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import shabaaspfm from '../../../public/images/Users Benefits.png'
import Accrodians from './Accrodians/Accrodians'
const Consumer = () => {
  return (
    <section id='consumer' className=' py-8'>
        <Container>
            <div className='md:grid grid-cols-2 justify-between gap-8 items-center md:min-h-[60vh] min-h-[25vh] sm:min-h-[40vh]'>
                
                <div className=' col-span-1 flex md:justify-start justify-center'>
                <Image src={shabaaspfm} alt='getstarted'  className='md:min-h-[60vh] min-h-[25vh] sm:min-h-[40vh]'  />
                </div>
                <div className='py-3 col-span-1'>
                    <h1 className='text-3xl md:text-[2.7rem]'>Consumer Benefits </h1>
                    {/* <h2 className='pt-3 '>SHABAAS is a Banking as a service (BaaS) technology based Personal Finance Management(PFM) app that enables you to :</h2> */}
                    <ul className='py-3 text-lg ml-12 md:ml-10'>
                      <li className='pt-3 list-decimal'> Pay directly from you bank account using your smartphone</li>
                      <li className='pt-3 list-decimal '> Instantly scan and pay for your purchases at participating merchant outlets.</li>
                      
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Consumer