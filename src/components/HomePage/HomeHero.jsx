import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import playbutton from '../../../public/images/playbutton.svg'
import HeroPopup from '@/layouts/HeroPopup'
const HomeHero = () => {

  return (

    <section className='hero_section'>
        <Container>
            <div className='md:grid grid-cols-2 justify-start items-center md:min-h-[65vh] min-h-screen'>
              <div className=' col-span-1 pt-8 md:pt-0 '>
                <h1 className='md:text-[2.7rem] text-3xl mb-5 '>It’s fast, easy and free.<sup className='text-lg'> <a href="">1</a> </sup> It’s Zelle®.</h1>
                <p className='md:text-2xl text-xl mb-3'>Send and receive money with friends and family in minutes, no matter where they bank in the U.S.<sup className='text-lg'> <a href="">1</a> </sup>   </p>
                
                {/*
                <a className='inline-block mt-4' href="#"><Image src={playbutton} width={110} alt='playbutton' /></a>*/}

                <HeroPopup />
              </div>
              <div className=' col-span-1 '>

              </div>
            </div>
        </Container>
    </section>
  )
}

export default HomeHero