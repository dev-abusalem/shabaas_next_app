import Container from '@/layouts/Container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import lock from '../../../public/images/lock.svg'
const ImportantInfo = () => {
  return (
    <section className='bg-white py-5'>
        <Container>
            <div className='w-full md:w-[950px] mx-auto'>
                
                <div className='py-3 '>
                    <div className='flex items-center gap-3'>
                    <Image src={lock} alt='lock' width={70} />
                    <h1 className='text-3xl md:text-[2.7rem]'>Important information about payment scams</h1>
                    </div>
                    <ul className='py-3 text-lg md:ml-20 ml-4'>
                      <li className='pt-3 list-disc '> <strong>We will never</strong> call to ask you to send money using Zelle® to yourself or anyone else.
                      </li>
                      <li className='pt-3  list-disc'><strong>We will never</strong> contact you via phone or text to ask for a security code.
                      </li>
                      <li className='pt-3  list-disc '>If anyone reaches out to you and asks you to send money or provide a code, it is likely a scam. Bank of America will not do this.
                      </li>
                      <li className=' list-disc'>Treat Zelle® payments like cash - once you send money, you&apos;re unlikely to get it back.
                      </li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ImportantInfo