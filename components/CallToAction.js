import Link from 'next/link'

export default function CallToAction({ product }) {
    
    return (
        <div className='bottom-left-aligned m-8'>
            <h4 className='text-xl pb-2'>Get 50% Off!</h4>
            <Link  href={`/products/${'jeans'}`}>
            <button className='bg-sassy-pink color-off-white rounded-full px-4 py-2'>SHOP NOW</button>
            </Link>
        </div>
    )
}