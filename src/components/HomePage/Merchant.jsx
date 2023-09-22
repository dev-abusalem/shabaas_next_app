
import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import accountimg from '../../../public/images/Merchant Benefits.png'
import Accrodians from './Accrodians/Accrodians'
const Merchant = () => {
  return (
    <section id="merchant" className='py-8'>
        <Container>
            <div className='md:grid grid-cols-2 justify-between gap-16 items-center md:min-h-[60vh] min-h-[25vh] sm:min-h-[40vh]'>
                
                
                <div className='py-3 col-span-1'>
                    <h1 className='text-3xl md:text-[2.7rem]'>Merchant Benefits</h1>
                    {/* <h2 className='pt-3 '>Once user authorises SHABAAS to access your banking data, it would read below account information and display a summary of all accounts in this view.</h2> */}
                    <ul className='py-3 text-lg ml-12 md:ml-10'>
                      <li className='pt-3 list-decimal '> Save on transaction costs for each transaction</li>
                      <li className='pt-3 list-decimal '> Transaction amount is transferred instantly and securely</li>
                      
                    </ul>
                </div>

                <div className='col-span-1 flex md:justify-end justify-center'>
                <Image src={accountimg} alt='getstarted' className='md:min-h-[60vh] min-h-[25vh] sm:min-h-[40vh]' />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Merchant