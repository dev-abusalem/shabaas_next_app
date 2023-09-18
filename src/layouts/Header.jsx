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
    <header className=' min-h-[60px] sticky top-0 bg-white '>
        <Container>
            <div className='md:flex justify-between items-center gap-5'>
                <div className="logo flex justify-between items-center">
                    <div>
                    <Link href="/"> <Image width={200} alt='logo' src={logo} /></Link>
                    </div>
                    <div className='md:hidden block cursor-pointer'>          
                        {showMenu ? <AiOutlineClose onClick={()=>setShowMenu(!showMenu)} /> : <FaBars onClick={()=>setShowMenu(!showMenu)} /> }
                    </div>
                </div>
                
                <nav className={showMenu ? 'block' : ' hidden md:block'}>
                    <ul className='md:flex justify-end gap-3'>
                        <li><Link href="/" className=' uppercase px-1 py-2 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary'>HOME</Link></li>
                        <li><Link href="/#shabaaspfm" className=' uppercase px-1 py-2 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary'>SHABAAS PFM</Link></li>
                        <li><Link href="/#accountview" className=' uppercase px-1 py-2 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary'>Accounts View</Link></li>
                        <li><Link href="/#tnsview" className=' uppercase px-1 py-2 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary'>Transactions View</Link></li>
                        <li><Link href="/#contact" className=' uppercase px-1 py-2 border-b-2 border-transparent duration-150 hover:text-primary hover:border-primary'>Contact us</Link></li>
                    </ul>
                </nav>
            </div>
        </Container>
    </header>
  )
}

export default Header