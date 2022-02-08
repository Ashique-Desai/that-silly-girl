import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import "./styles.css"
import Image from 'next/image'
import cnbcLogo from '../images/CNBC_TV18.png'
import cosmopolitanLogo from '../images/cosmopolitan.png'
import feminaLogo from '../images/femina.png'
import forbesLogo from '../images/Forbes.png'
import midDayLogo from '../images/Mid_day.png'
import mintLoungeLogo from '../images/mint_lounge.png'
import news18Logo from '../images/NEWS_18.png'
import toiLogo from '../images/TOI_LOGO.png'
import tweakLogo from '../images/Tweak.png'
import viceLogo from '../images/Vice.png'
import vogueLogo from '../images/Vogue.png'
import yourStoryLogo from '../images/Yourstory.png'



const animation = { duration: 3000, easing: (t) => 1 + --t * t * t * t * t }

export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    initial: 0,
    slides: {
      perView: 5,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 3,
        },
      },
      '(max-width: 500px)': {
        slides: {
          perView: 2,
        },
      },
    },
    created(s) {
      s.moveToIdx(1, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation)
    },
  })
  return (
    <div style={{ flexDirection: "column" }} className=" pt-12 pb-12" >
      <div style={{ display: "block", textAlign: "center" }} className="text-3xl font-bold mb-4"><h1>Talk Of The Town</h1></div>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <Image className='mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={cnbcLogo}
            alt="hero"

          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image className='mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={cosmopolitanLogo}
            alt="hero"

          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image className='mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={feminaLogo}
            alt="femina"

          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image className='mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={forbesLogo}
            alt="forbes"

          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image className='mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={midDayLogo}
            alt="midday"

          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image className='mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={mintLoungeLogo}
            alt=""

          />
        </div>
        <div className="keen-slider__slide number-slide7">
          <Image className='relative mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={news18Logo}
            alt="hero"

          />
        </div>
        <div className="keen-slider__slide number-slide7">
          <Image className='relative mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={toiLogo}
            alt="hero"

          />
        </div>
        <div className="keen-slider__slide number-slide7">
          <Image className='relative mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={tweakLogo}
            alt="hero"

          />
        </div>
        <div className="keen-slider__slide number-slide7">
          <Image className='relative mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={viceLogo}
            alt="hero"

          />
        </div>
        <div className="keen-slider__slide number-slide7">
          <Image className='relative mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={vogueLogo}
            alt="hero"

          />
        </div>
        <div className="keen-slider__slide number-slide7">
          <Image className='relative mt-0 mb-0 ml-auto mr-auto  w-2/4'
            src={yourStoryLogo}
            alt="hero"

          />
        </div>
      </div>
    </div>

  )
}
