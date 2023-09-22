import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import transaction from '../../../public/images/tnx2.jpg'
import Accrodians from './Accrodians/Accrodians'
const TranstionView = () => {
  return (
    <section id="tnsview" className=' py-8'>
        <Container>
            <div className='md:grid grid-cols-2 justify-between gap-16 items-center md:min-h-[60vh] min-h-[25vh] sm:min-h-[40vh]'>
                
                <div className='col-span-1 flex md:justify-start justify-center'>
                <Image src={transaction} alt='getstarted' className='md:min-h-[60vh] min-h-[25vh] sm:min-h-[40vh]' />
                </div>
                <div className='py-3 col-span-1'>
                    <h1 className='text-3xl md:text-[2.7rem]'>What is Transactions View?</h1>
                    <h2 className='pt-3 '>SHABAAS can automatically categorise transactions with below data making it easier to filter and view transactions wherever available</h2>
                    <ul className='py-3 text-lg ml-12 md:ml-10'>
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