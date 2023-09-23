import Accrodians from "@/components/HomePage/Accrodians/Accrodians";
import FAQS from "@/components/HomePage/FAQS";
import GetStarted from "@/components/HomePage/GetStarted";
import HomeHero from "@/components/HomePage/HomeHero";
import ImportantInfo from "@/components/HomePage/ImportantInfo";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Head from "next/head";
import Consumer from "@/components/HomePage/Consumer";
import Merchant from "@/components/HomePage/Merchant";
// import 'react-quill/dist/quill.snow.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>SHABAAS – Secure Payments</title>
        <meta
          name="description"
          content="SHABAAS – Secure Payments"
          key="desc"
        />
      </Head>
      <div className="min-h-screen duration-100  ">
        <Header />
        <HomeHero />
        <GetStarted />
        <Consumer />
        <Merchant />
        <ImportantInfo />
        <FAQS />
        <Footer />
      </div>
    </>
  );
}
