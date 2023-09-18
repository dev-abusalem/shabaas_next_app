import Accrodians from '@/components/HomePage/Accrodians/Accrodians'
import FAQS from '@/components/HomePage/FAQS'
import GetStarted from '@/components/HomePage/GetStarted'
import HomeHero from '@/components/HomePage/HomeHero'
import ImportantInfo from '@/components/HomePage/ImportantInfo'
import TranstionView from '@/components/HomePage/TranstionView'
import ContactUs from '@/layouts/ContactUs'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import Head from 'next/head'
import AccountView from '@/components/HomePage/AccountView'
import ShabaasPfm from '@/components/HomePage/ShabaasPfm'

export default function Home() {
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
      <div className='min-h-screen duration-100  '>
        <Header />
        <HomeHero />
        <GetStarted />
        <ShabaasPfm />
        <AccountView />
        <TranstionView />
        <ImportantInfo />
        <FAQS />
        <ContactUs />
        <Footer />
      </div>
   </>
  )
}
