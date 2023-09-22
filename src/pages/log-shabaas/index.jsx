
"use client"
import React from 'react'
import Head from 'next/head'
import LoginPage from '@/components/LoginPage/LoginPage'

const index = () => {

    

  return (
    <>
     <Head>
        <title>
        Login – SHABAAS
        </title>
        <meta
          name="description"
          content="Terms of Use – SHABAAS"
          key="desc"
        />
      </Head>

        <LoginPage />
        

    </>
  )
}

export default index