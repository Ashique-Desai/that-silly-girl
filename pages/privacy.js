import Head from "next/head"
import PrivacyPolicy from "../components/PrivacyPolicy"

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Hey Sassy - Privacy Policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ff00a5" />
      </Head>
      <div className="min-h-screen py-12 sm:pt-20">
        <PrivacyPolicy />
      </div>
    </>
  )
}