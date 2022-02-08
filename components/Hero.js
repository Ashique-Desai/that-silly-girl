import Link from 'next/link'
import Image from 'next/image'
import hero from '../images/hero.jpg'
import CallToAction from './CallToAction'
import SectionWrapper from "../components/SectionWrapper"

export default function Hero() {
  return (
    <section className='block relative bg-off-white mt-8 px-3 pt-4 pb-8'>
        <div className='relative h-[500px] md:hero-container-fullscreen'>
        <Image className='relative feature-image-cover border-radius-25'
          src={hero}
          alt="hero"
          layout='fill'
          priority
        />
        <CallToAction />
        </div>
      </section>
  )
}