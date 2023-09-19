"use client"
import React, { useState } from 'react'
import Container from './Container'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/images/logo.png"
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {

    const [showMenu , setShowMenu] = useState(false)

  return (
    <header className=' min-h-[60px] sticky top-0 bg-white z-10 '>
        <Container>
            <div className='md:flex justify-between items-center gap-5'>
                <div className="logo flex justify-between items-center">
                    <div>
                    <Link href="/"> <Image width={200} alt='logo' src={logo} /></Link>
                    </div>
                    <div className='md:hidden block cursor-pointer'>          
                        {showMenu ? <AiOutlineClose className='border-2 border-black text-4xl p-2 rounded-md ' onClick={()=>setShowMenu(!showMenu)}  /> : <FaBars className='border-2 border-black text-4xl p-2 rounded-md ' onClick={()=>setShowMenu(!showMenu)} /> }
                    </div>
                </div>
                
                <nav className={showMenu ? 'block' : ' hidden md:block'}>
                    <ul className='md:flex items-center justify-end gap-10'>
                        <li><Link href="/" className=' block md:inline-block  p-1 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary'>Home</Link></li>
                        <li><Link href="/#shabaaspfm" className='block md:inline-block p-1 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary'>Consumer</Link></li>
                        <li><Link href="/#accountview" className=' block md:inline-block p-1 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary'>Merchant</Link></li>
                        {/* <li><Link href="/#contact" className='block md:inline-block p-1 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary'>Contact</Link></li> */}
                    </ul>
                </nav>
            </div>
        </Container>
    </header>
  )
}

export default Header