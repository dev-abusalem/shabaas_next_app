import Onboard from '@/components/Merchant/Onboard/Onboard'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
     <Head>
        <title>
        Merchant - Benefits – SHABAAS
        </title>
        <meta
          name="description"
          content="Terms of Use – SHABAAS"
          key="desc"
        />
      </Head>
      <Header />

        <Onboard />
        
      <Footer />

    </>
  )
}

export default index