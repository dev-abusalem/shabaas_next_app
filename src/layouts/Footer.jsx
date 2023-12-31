import React from 'react'
import Container from './Container'
import Link from 'next/link'
import {FaLinkedinIn , FaTwitter , FaYoutube} from 'react-icons/fa'
import {TiSocialInstagram} from 'react-icons/ti'
const Footer = () => {
  return (
    <footer className='py-10 bg-[#f2f2f2]'>
      <Container>
        <div className=' max-w-[750px] mx-auto'>
          <div className='flex justify-center gap-16 items-center pb-10'>
            <Link href="https://www.linkedin.com/company/shabaas/"><FaLinkedinIn className='text-xl text-gray-600 hover:text-gray-700 duration-100' /></Link>
            <Link href="https://twitter.com/shabaasfinance"><FaTwitter className='text-xl text-gray-600 hover:text-gray-700 duration-100' /></Link>
            <Link href="https://www.youtube.com/@shabaasfinance"><FaYoutube className='text-xl text-gray-600 hover:text-gray-700 duration-100' /></Link>
          </div>
          <div className='w-full h-[2px] bg-gray-400' ></div>
          <ul className='md:flex justify-center md:gap-16 gap-6 items-center py-10'>
            <li className='' >
            <Link className=' md:py-0 md:inline-block block py-1 hover:underline text-gray-600 hover:text-gray-700 duration-100' href="/terms">Terms of Use</Link>
            </li >
            <li >
            <Link className=' md:py-0 md:inline-block block py-1 hover:underline text-gray-600 hover:text-gray-700 duration-100' href="/privacy-policy">Privacy Policy </Link>
            </li >
            <li >
            <Link className=' md:py-0 md:inline-block block py-1 hover:underline text-gray-600 hover:text-gray-700 duration-100' href="/privacy-collection">Privacy Collection </Link>
            </li >
            <li >
            <Link className=' md:py-0 md:inline-block block py-1 hover:underline text-gray-600 hover:text-gray-700 duration-100' href="/cookie-policy">Cookie Policy</Link>
            </li >
            <li >
            <Link className= ' md:py-0 md:inline-block block py-1 hover:underline  text-gray-600 hover:text-gray-700 duration-100' href="/">About Us </Link>
            </li >
          </ul>
          <div className='w-full h-[2px] bg-gray-400' ></div>

          <div className='flex justify-center gap-16 items-center pt-10 text-center'>
           <p>© SHABAAS Pty Limited Australia ABN 74 653 591 550 All rights reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer