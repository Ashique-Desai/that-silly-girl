import Head from "next/head"
import TermsAndConditions from "../components/TermsAndConditions"

export default function Terms() {
  return (
    <>
      <Head>
        <title>Hey Sassy - Terms and Conditions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ff00a5" />
      </Head>
      <div className="min-h-screen py-12 sm:pt-20">
        <TermsAndConditions />
      </div>
    </>
  )
}