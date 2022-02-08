import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '../utils/helpers'


const ProductCard = ({ product }) => {
  const { handle, title } = product.node

  const { altText, originalSrc } = product.node.images.edges[0].node

  const price = product.node.priceRange.minVariantPrice.amount
  const compareAtPrice = product.node.compareAtPriceRange.maxVariantPrice.amount

  return (
    <Link
      href={`/products/${handle}`}>
       <a className="group">
        <div className=" bg-gray-200 rounded-3xl overflow-hidden aspect-square">
          <div className="relative group-hover:opacity-75 h-full">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <button className='bg-sassy-pink color-off-white rounded-full px-4 py-2 my-3'>Add to Cart | {formatter.format(price)}</button>
        <p className="mt-1 text-base">{formatter.format(price)}  |  <span><del>{formatter.format(compareAtPrice)}</del></span></p>
      </a>
    </Link>
    
  )
}

export default ProductCard