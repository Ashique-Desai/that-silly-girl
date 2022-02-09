import React from 'react'


export default function CTASignup() {
    const registerUser = event => {
        event.preventDefault() // don't redirect the page
        // where we'll add our form logic
      }
    return (
        // <div className='block relative bg-off-white  px-3 pt-4 pb-8'>
        <div className='bg-off-white text-center sm:pt-16 sm:pb-16 sm:mt-8 pt-14 pb-14 px-4'>
            <p className='text-3xl sm:mb-8 mb-5 font-bold'>Sign-up</p>
            <p className='sm:text-xl text-base sm:leading-8 leading-8 ml-auto mr-auto pb-6'>
                For getting fun stuff on fashion
            </p>
            <form className='bg-transparent text-current' onSubmit={registerUser}>
               <input className='border-b-2 mt-1 mr-1 border-current bg-transparent'
                id="name" 
                type="text" 
                autoComplete="name" 
                required 
                placeholder="ENTER EMAIL" />
                <button className='bg-sassy-pink color-off-white px-4 py-2 mt-4' type="submit">Subscribe</button>
            </form>
        </div>
        // </div>
    )
}