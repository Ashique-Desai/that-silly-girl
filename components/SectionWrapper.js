import React from 'react'

export default function SectionWrapper({ children }) {
    return (
        <section className='block relative bg-off-white  px-3 pt-4 pb-8'>
            {/* <div className='relative h-[500px] md:hero-container-fullscreen'> */}
            { children }
            {/* </div> */}
        </section>
    )
}