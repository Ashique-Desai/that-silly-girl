/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
// Clerk authentication
import { useUser, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';



const solutions = [
  {
    name: 'SHOP',
    description: 'ALL CATAGORIES.',
    href: '/shop',
    icon: ChartBarIcon,
  },
  {
    name: 'STORY',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/story',
    icon: CursorClickIcon,
  },
  { name: 'SHIPPING', description: "Shipping.", href: '/shipping', icon: ShieldCheckIcon },

]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavExperimental3() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext)

  let cartQuantity = 0
  cart.map(item => {
    return (cartQuantity += item?.variantQuantity)
  })
  return (
    <Popover className="relative bg-transparent uppercase">
      <div className="max-w-8xl mx-auto px-4 sm:px-16">
          {/* Desktop */}
        <div className="container ml-auto mr-auto py-8 md:justify-start md:space-x-10">
          <div className="hidden md:flex justify-start lg:w-0 lg:flex-1">
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <a href="/shop" className="text-base font-medium  hover:text-gray-900">
                Shop
              </a>
              <a href="/story" className="text-base font-medium  hover:text-gray-900">
                Story
              </a>
              <a href="/shipping" className="text-base font-medium  hover:text-gray-900">
                Shipping
              </a>
            </Popover.Group>
          </div>
          {/* Hamburger Menu Below */}
          <div className="box   md:hidden">
            <span className='mr-auto'>
            <Popover.Button className="p-2 inline-flex items-center justify-center decoration-inherit hover:text-gray-500 ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
            </span>
          </div>
          {/* Logo below */}
          <div as="nav" className="box space-x-10">
            <span>
            <div className="relative">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-12 w-auto sm:h-14"
                  src="/logo-4-raster.svg"
                  alt=""
                />
              </a>
            </div>
            </span>
          </div>
          {/* last element on the navbar below */}
          <div className="box lg:w-0">
            <span>
            <SignedIn>
              <div className="inline-block px-1 relative decoration-inherit">
                <UserButton />
              </div>
            </SignedIn>
            {/* Account icon below */}
            <SignedOut>
              <Link href="/sign-in">
                <a className="text-md font-bold cursor-pointer" title="Sign-in / Register">
                  <button className="py-4 px-1 relative border-2 border-transparent decoration-inherit rounded-full  focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" aria-label="login">
                    <svg className="hidden md:block sm:w-5 w-[18px] h-auto sm:mr-2 mr-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.933 20.009">
                      <path d="M7.076 19.981c-2.899-.227-5.288-1.053-6.367-2.201-.585-.622-.749-1.095-.7-2.018.107-2.019.898-3.906 2.229-5.317.373-.395.513-.481.787-.481.511 0 .872.484.725.973-.034.115-.168.312-.332.489-1.125 1.214-1.773 2.71-1.871 4.317-.037.614.009.741.4 
              1.107.578.541 1.803 1.044 3.241 1.33 1.754.349 3.951.401 5.785.137 1.781-.257 3.33-.824 4.026-1.475.385-.36.428-.486.387-1.114-.107-1.636-.748-3.101-1.892-4.324-.346-.37-.436-.601-.354-.906.101-.374.512-.631.894-.559.127.024.264.114.465.305 1.067 1.018 
              1.918 2.588 2.256 4.162.147.684.223 1.704.156 2.094-.291 1.701-2.656 2.973-6.347 3.414-.753.09-2.725.129-3.487.069zm.814-9.229c-.737-.111-1.284-.275-1.83-.549-1.493-.75-2.532-2.122-2.898-3.827-.08-.372-.08-1.6-.001-1.975.356-1.678 1.353-3.024 2.791-3.768A5.12 5.12 
              0 0 1 8.202.008c1.483-.086 2.994.499 4.069 1.575a5.37 5.37 0 0 1 0 7.609c-.836.836-1.921 1.374-3.103 1.538-.352.049-1.019.06-1.28.02zm1.602-1.649c1.615-.475 2.708-1.825 2.813-3.476.109-1.717-.945-3.309-2.565-3.871-1.405-.487-2.945-.136-3.992.912S4.348 5.255 4.835 
              6.66c.453 1.306 1.564 2.248 2.982 2.529a5.12 5.12 0 0 0 1.675-.087z" opacity=".99" fill="#ff00af" stroke="currentColor" fillOpacity=".941" strokeWidth="0.8">
                      </path>
                    </svg>
                  </button>
                </a>
              </Link>
            </SignedOut>
            {/* Cart icon below */}
            <button title="Cart" className="py-4  relative transition duration-150 ease-in-out" aria-label="Cart">
              <a className="text-md font-bold cursor-pointer"
                onClick={() => setCartOpen(!cartOpen)}>
                <svg className="sm:h-7 sm:w-7 h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <span className="absolute -mt-10">
                  <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-sm font-semibold leading-4 bg-off-white decration-inherit">
                    {cartQuantity}
                  </div>
                </span>
              </a>
              <MiniCart cart={cart} />
            </button>
            </span>
          </div>
        </div>
      </div>
      {/* Pop out (Open) Menu list below  */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="z-50 absolute top-0  inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="h-screen rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-sassy-pink divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="p-2 inline-flex items-center justify-center color-off-white hover:text-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-16">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md"
                    >
                      <span className="ml-3 text-base font-medium color-off-white">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div>
                <Link href="/sign-in">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border-transparent rounded-md shadow-sm text-base font-medium decoration-inherit bg-off-white"
                  >
                    Sign in / Sign up
                  </a>
                </Link>
                {/* <p className="mt-6 text-center text-base font-medium text-gray-200">
                  Existing customer?{' '}
                  <a href="#" className="color-off-white hover:text-indigo-500">
                    Sign in
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
