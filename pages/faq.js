import Head from "next/head"
import FAQ from "../components/FAQ"

export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Hey Sassy - FAQ's</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ff00a5" />
      </Head>
      <div className="min-h-screen py-12 sm:pt-20">
        <FAQ />
      </div>
    </>
  )
}

