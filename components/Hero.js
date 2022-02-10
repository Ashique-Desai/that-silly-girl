import Link from 'next/link'
import Image from 'next/image'
import hero from '../images/image-hero-1920w.jpeg'
import heroNew from '../images/hero-grey-top.jpeg'
import heroNew2 from '../images/hero-2.jpeg'
import heroMobile from'../images/image-hero-mobile.jpeg'
import heroMobile1 from'../images/hero-mobile-327w.jpeg'
import CallToAction from './CallToAction'
import SectionWrapper from "../components/SectionWrapper"

export default function Hero() {
  return (
    <section className='block relative bg-off-white mt-8 px-3 pt-4 pb-8'>
        <div className='relative  md:hero-container-fullscreen'>
          <div className='hidden xs:block '>
          <Image className='relative feature-image-cover border-radius-25'
          src={heroNew2}
          alt="hero"
          layout='fill'
         
        />
          </div>
        <div className='xs:hidden block'>
        <Image className='relative feature-image-cover border-radius-25'
          src={heroMobile1}
          alt="hero"
          layout='responsive'
          priority
        />
        </div>
        
        <CallToAction />
        </div>
      </section>
  )
}