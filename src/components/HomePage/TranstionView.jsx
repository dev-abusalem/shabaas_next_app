import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import ourapp from '../../../public/images/image(2).png'
import Accrodians from './Accrodians/Accrodians'
const TranstionView = () => {
  return (
    <section id="tnsview" className=' py-5'>
        <Container>
            <div className='md:grid grid-cols-2 justify-between gap-16 items-center min-h-[50vh]'>
                
                <div className='col-span-1 flex md:justify-start justify-center'>
                <Image src={ourapp} alt='getstarted' style={{width:'60%', minHeight:'50vh'}}/>
                </div>
                <div className='py-3 col-span-1'>
                    <h1 className='text-3xl md:text-[2.7rem]'>What is Transactions View?</h1>
                    <h2 className='pt-3 '>SHABAAS can automatically categorise transactions with below data making it easier to filter and view transactions wherever available</h2>
                    <ul className='py-3 text-lg ml-6 md:ml-10'>
                      <li className='pt-3 list-decimal '>Transaction Name</li>
                      <li className='pt-3 list-decimal '>Transaction Amount</li>
                    </ul>
                    <p>Additionally, transactions can be filtered by time range.</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default TranstionView