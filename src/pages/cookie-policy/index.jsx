import CookiePolicyMain from '@/components/CookiePolicy/CookiePolicyMain'
import Container from '@/layouts/Container'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
   <>
   <Head>
        <title>
        Cookie Policy – SHABAAS
        </title>
        <meta
          name="description"
          content="Cookie Policy – SHABAAS"
          key="desc"
        />
      </Head>
   <Header />
    <CookiePolicyMain /> 
    <Footer />
   </>
  )
}

export default index