import React from 'react'
import Head from "next/head"

export default function Story() {
    return (
        <>
            <Head>
                <title>Hey Sassy - Story</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#ff00a5" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap" rel="stylesheet" />
            </Head>
            <section class="relative py-16 min-w-screen animation-fade animation-delay bg-off-white">
                <div class="container px-8 mx-auto sm:px-12 xl:px-5">
                    <h3 class="mt-1 text-2xl font-bold text-left  sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center">
                        Our Story
                    </h3>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-off-white sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3 rounded-lg">
                        <p class="mt-2 text-base  sm:text-lg md:text-normal">
                            We were born in 2015, and reborn in 2021 as a classy and sophisticated clothing brand. Headquartered in Mumbai, India, we make awesome clothing that fit a wide range of sizes and body types.
                            We strive to make you discover your love for denim, be it jeans, shoes, belts or bags. Catering to thousands of women, we are loved by the homemaker, the influencer, the entrepreneur and every other woman who loves her attire!
                            Our products are designed in-house using design thinking principles and are sustainably made by our skilled craftsmen. Our products are unique, in that, they are light on your pocket but heavy on style, fit and comfort.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}