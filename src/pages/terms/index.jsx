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
        Terms of Use – SHABAAS
        </title>
        <meta
          name="description"
          content="Terms of Use – SHABAAS"
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