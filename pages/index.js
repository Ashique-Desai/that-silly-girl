import React from "react"
import { getProductsInCollection } from "../lib/shopify"
import ProductList from "../components/ProductList"
import Hero from "../components/Hero"
import SectionOne from "../components/SectionOne"
import Carousel from "../components/Carousel"
import SocialResponsibility from "../components/SocialResponsibility"
import Shipping from "../components/Shipping"
import SectionWrapper from "../components/SectionWrapper"
import Head from 'next/head'


import { useUser, UserButton } from '@clerk/nextjs'
import CTASignup from "../components/CTASignUp"


export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>ThatSillyGirl</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ff00a5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet" />
          </Head>
          <Hero />
          <SectionOne />
          <ProductList products={products} />
          <Shipping />
          <CTASignup />
          {/* <SectionWrapper> */}
          <Carousel />
          <SocialResponsibility />
          {/* </SectionWrapper> */}
        </>
        )
}

        export async function getStaticProps() {
  const products = await getProductsInCollection()
        return {
          props: {products}, // will be passed to the page component as props
  }
}