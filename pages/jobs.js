import React from 'react'
import Head from "next/head"
import JobsCard from '../components/JobsCard'

export default function Jobs() {
    return (
        <>
            <Head>
                <title>Hey Sassy - Jobs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#ff00a5" />
            </Head>
            <div className="min-h-screen py-12 sm:pt-20">
                <JobsCard />
            </div>
        </>
    )
}