import React from 'react'
import Head from "next/head"
import { getProductsInCollection } from "../lib/shopify"
import ProductList from "../components/ProductList"

export default function Story({products}) {
    return (
        <>
        <Head>
        <title>Hey Sassy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ff00a5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet" />
          </Head>
          <ProductList products={products} />
        </>
    )
}

export async function getStaticProps() {
    const products = await getProductsInCollection()
    return {
      props: { products }, // will be passed to the page component as props
    }
  }