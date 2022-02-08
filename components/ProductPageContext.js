import Image from 'next/image'
import ProductForm from './ProductForm'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import RecommendedList from './RecommendedList'
import SectionWrapper from './SectionWrapper'


export default function ProductPageContent({ product }) {

  const images = []

  product.images.edges.map((image, i) => {
    images.push(
      <SwiperSlide key={`slide-${i}`}>
        <Image src={image.node.originalSrc} alt={image.node.altText} layout="fill" objectFit="cover" />
      </SwiperSlide>
    )
  })

  SwiperCore.use([Navigation, Pagination])

  return (
    <div>
       <SectionWrapper>
      <div className="max-w-6xl flex flex-col lg:justify-start md:flex-row md:items-start xl:w-10/12">
        <div className="lg:w-10/12 w-full overflow-hidden lg:pl-8">
          <div className="relative xl:w-[700px] w-full pt-4">
            <Swiper
              style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }}
              navigation
              pagination={{ clickable: true }}
              className="xl:w-[700px] w-full rounded-2xl aspect-square"
              loop="true"
            >
              {images}
            </Swiper>
          </div>
        </div>
        <ProductForm product={product} />
      </div>
      <p className="pt-4 ml-8 md:space-x-4 mx-auto xl:w-[700px]">{product.description}</p>
      <hr className='w-full mt-10' />
      <RecommendedList current={product.id} products={product.collections.edges[0].node.products.edges} />
      </SectionWrapper>
    </div>
  )
}