import React from 'react'
import CTALink from './CTALink'

export default function SectionOne() {
    return (
        <section className='text-center sm:pt-16 sm:pb-20 sm:mt-8 pt-8 pb-8 px-4'>
            <h1 className='sm:text-[40px] text-3xl sm:mb-8 mb-5 font-bold'>Sassy, Who?</h1>
            <p className='sm:w-[55%] sm:text-xl text-base sm:leading-8 leading-8 ml-auto mr-auto'>
                We are a female founded fashion brand who understands the sensibilities of modern young women. We understand the cool and the sassy like no other brand.
                What say?
            </p>
            <div className='pt-4'>
                <CTALink url={'/story'} text={'Our Story'}  />
            </div>
        </section>
    )
}
