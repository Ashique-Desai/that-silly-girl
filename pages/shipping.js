import React from 'react'
import Head from "next/head"

export default function Shipping() {
    return (
        <>
            <Head>
                <title>Hey Sassy - Shipping Policy</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#ff00a5" />
            </Head>
            <section class="relative py-16 min-w-screen animation-fade animation-delay bg-off-white">
                <div class="container px-8 mx-auto sm:px-12 xl:px-5">
                    <h3 class="mt-1 text-2xl font-bold text-left  sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center">
                        Shipping Policy
                    </h3>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-off-white sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3 rounded-lg">
                        {/* <h3 class="text-lg font-bold  sm:text-xl md:text-2xl">Graphic Designer</h3> */}
                        <p class="mt-2 text-base  sm:text-lg md:text-normal">
                        All orders are processed within 2 hours to 1 business day (excluding weekends and holidays) after receiving your order 
                        confirmation email. You will receive another notification when your order has shipped. 
                        </p>
                    </div>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-off-white sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3 rounded-lg">
                        <h3 class="text-lg font-bold  sm:text-xl md:text-2xl">Domestic Shipping Rates and Estimates</h3>
                        <p class="mt-2 text-base  sm:text-lg md:text-normal">
                        For calculated shipping rates: Shipping charges for your order 
                        will be calculated and displayed at checkout. 
                        </p>
                    </div>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-off-white sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3 rounded-lg">
                        <h3 class="text-lg font-bold  sm:text-xl md:text-2xl">Local delivery</h3>
                        <p class="mt-2 text-base  sm:text-lg md:text-normal">
                        Free local delivery is available for orders over Rs.5000 within [Mumbai]. For orders under Rs.5000, we charge Rs.5000 for local delivery.
                        Deliveries are made from 10:00 on 19:00 hours. We will contact you via text message with the phone number you provided at checkout to notify you on the day of our arrival. 
                        </p>
                    </div>
                    <div class="w-full px-6 py-6 mx-auto mt-10 bg-off-white sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3 rounded-lg">
                        <h3 class="text-lg font-bold  sm:text-xl md:text-2xl">International Shipping</h3>
                        <p class="mt-2 text-base  sm:text-lg md:text-normal">
                        We offer international shipping to the following countries: 
                        USA, UK, Germany, Italy, France, Australia, Dubai, Qatar, Oman.  
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}