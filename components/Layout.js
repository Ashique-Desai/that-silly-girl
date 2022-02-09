import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className='block break-words hyphens-auto pb-16 sm:px-8 px-2 max-w-screen-3xl ml-auto mr-auto'>
        {children}
      </main>
      <Footer />
    </div>
  )
}