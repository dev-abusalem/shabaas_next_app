import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import ourapp from '../../../public/images/image(5).png'
import Accrodians from './Accrodians/Accrodians'
const ShabaasPfm = () => {
  return (
    <section id='shabaaspfm' className=' py-5'>
        <Container>
            <div className='md:grid grid-cols-2 justify-between gap-8 items-center min-h-[50vh]'>
                
                <div className=' col-span-1 flex md:justify-start justify-center'>
                <Image src={ourapp} alt='getstarted' style={{width:'60%', minHeight:'50vh'}}/>
                </div>
                <div className='py-3 col-span-1'>
                    <h1 className='text-3xl md:text-[2.7rem]'>What is SHABAAS PFM?</h1>
                    <h2 className='pt-3 '>SHABAAS is a Banking as a service (BaaS) technology based Personal Finance Management(PFM) app that enables you to :</h2>
                    <ul className='py-3 text-lg ml-6 md:ml-10'>
                      <li className='pt-3 list-decimal'> Connect accounts from multiple banks in read only mode to show summary of all balances in dashboard view.</li>
                      <li className='pt-3 list-decimal '>View top spending categories across all bank accounts.</li>
                      <li className='pt-3 list-decimal '>Filter transactions by categories available in your bank account. eg Food Services, Cafe, Utility Payments, etc.</li>
                      <li>Filter transactions by date to see the transactions only during the selected dates.</li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ShabaasPfm