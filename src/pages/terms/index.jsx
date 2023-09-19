import TermsMain from '@/components/TermsMain/TermsMain'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
    <Head>
        <title>
        SHABAAS – Secure Payments
        </title>
        <meta
          name="description"
          content="SHABAAS – Secure Payments"
          key="desc"
        />
      </Head>
      <Header />

        <TermsMain />

      <Footer />
    </>
  )
}

export default index