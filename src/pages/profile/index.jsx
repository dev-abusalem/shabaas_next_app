import Profile from '@/components/ProfilePage/Profile'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
    <Head>
        <title>
            Profile – SHABAAS
        </title>
        <meta
          name="description"
          content="Profile – SHABAAS"
          key="desc"
        />
      </Head>
      <Header />

        <Profile />

      <Footer />
    </>
  )
}

export default index