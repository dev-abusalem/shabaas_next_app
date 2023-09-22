import Container from '@/layouts/Container'
import Image from 'next/image'
import React from 'react'
import playbutton from '../../../public/images/playbutton.svg'
import HeroPopup from '@/layouts/HeroPopup'
const HomeHero = () => {

  return (

    <section id='home' className='hero_section md:min-h-[90vh] min-h-[20vh] sm:min-h-[35vh]'>
       <div>
       <Container>
            <div className='md:grid grid-cols-2 justify-start items-center'>
              <div className=' col-span-1 pt-8 md:pt-0 hidden'>
                <h1 className='md:text-[2.7rem] text-3xl mb-5 block md:leading-[3rem]'>Save while you transact using SHABAAS Pay App.</h1>
                <p className='md:text-2xl text-xl mb-3'>Pay for your food and groceries instantly and save on each transaction while you pay.<sup className='text-lg'> <a href="">1</a> </sup>   </p>
                
                {/*
                <a className='inline-block mt-4' href="#"><Image src={playbutton} width={110} alt='playbutton' /></a>*/}

                {/* <HeroPopup /> */}
              </div>
              <div className=' col-span-1 '>

              </div>
            </div>
        </Container>
       </div>
    </section>
  )
}

export default HomeHero