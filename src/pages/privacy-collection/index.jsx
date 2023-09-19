import { PrivacyCollectionMain } from '@/components/PrivacyCollection/PrivacyCollectionMain'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
    <Head>
        <title>
            Privacy Policy – SHABAAS
        </title>
        <meta
          name="description"
          content="Privacy Policy – SHABAAS"
          key="desc"
        />
      </Head>
      <Header />

       <PrivacyCollectionMain /> 

      <Footer />
    </>
  )
}

export default index