import React from "react"
import poorGirlImage from '../images/poor-gir-bw.jpg'
import poorGirlImage2 from '../images/poor-girl-2.jpg'
import Image from 'next/image'

export default function SocialResponsibility() {
    return (
        <section className="flex flex-auto lg:flex-row flex-col justify-between">
            <div style={{}} className="w-full flex-1 lg:pl-4">
                <Image className='rounded-3xl'
                    src={poorGirlImage2}
                    alt=""
                />
            </div>
            <div style={{}} className="flex-1">
                <div className='text-center lg:text-left lg:pt-0 pt-8 pb-8 lg:px-16 px-4'>
                    <h1 className='sm:text-[40px] text-3xl sm:mb-8 mb-5 font-bold'>We Care. <br className="lg:hidden" />We Aren't Just Sassy!</h1>
                    <p className='sm:text-xl text-base sm:leading-8 leading-8 ml-auto mr-auto'>
                        We’ve partnered with Lakshyam—that works towards enhancing the livelihoods of girls and women living in slums of Delhi, through menstrual hygiene education and access to sanitary pads made by rural women entrepreneurs. We pledge to donate sanitary pads to 150 such girls and women every month. We are also donating 40 Soothing Sticks every quarter (to be increased basis adoption).
                        When YOU buy from us, we can continue to help THEM.
                    </p>
                </div>
            </div>
        </section>
    )
}