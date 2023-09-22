import ContactForm from '@/components/ContactPage/ContactForm'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
     <Head>
        <title>
        Contact us – SHABAAS
        </title>
        <meta
          name="description"
          content="Terms of Use – SHABAAS"
          key="desc"
        />
      </Head>
      <Header />

        <ContactForm />

      <Footer />

    </>
  )
}

export default index