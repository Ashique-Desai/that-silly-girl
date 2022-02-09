import Head from "next/head"
import ProductPageContent from "../../components/ProductPageContext"
import { getAllProducts, getProduct, recursiveCatalog } from "../../lib/shopify"

export default function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>ThatSillyGirl - Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#ff00a5" />
      </Head>
      <div className="min-h-screen py-12 sm:pt-20">
        <ProductPageContent product={product} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const products = await recursiveCatalog()

  const paths = products.map(item => {
    const product = String(item.node.handle)

    return {
      params: { product }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product)

  return {
    props: {
      product
    }
  }
}