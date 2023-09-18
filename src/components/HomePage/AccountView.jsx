
import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import ourapp from '../../../public/images/image(3).png'
import Accrodians from './Accrodians/Accrodians'
const AccountView = () => {
  return (
    <section id="accountview" className='bg-white py-5'>
        <Container>
            <div className='md:grid grid-cols-2 justify-between gap-16 items-center min-h-[50vh]'>
                
                
                <div className='py-3 col-span-1'>
                    <h1 className='text-3xl md:text-[2.7rem]'>What is Accounts View?</h1>
                    <h2 className='pt-3 '>Once user authorises SHABAAS to access your banking data, it would read below account information and display a summary of all accounts in this view.</h2>
                    <ul className='py-3 text-lg ml-6 md:ml-10'>
                      <li className='pt-3 list-decimal '> Account Name</li>
                      <li className='pt-3 list-decimal '>Account Balances</li>
                      
                    </ul>
                </div>

                <div className='col-span-1 flex md:justify-end justify-center'>
                <Image src={ourapp} alt='getstarted' style={{width:'60%', minHeight:'50vh'}}/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AccountView