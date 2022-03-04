import Link from "next/link"
const navigation1 = [
  { name: 'Shop', href: '/shop' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Story', href: '/story' },
  { name: 'Shipping', href: '/shipping' },
]

const navigation2 = [
  { name: 'FAQs', href: '/faq' },
  { name: 'Terms and Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Returns And Exchanges', href: '/returns' },
  // {name: 'Impact', href: '#'},

]

export default function Footer() {
  return (
    <footer className="bg-sassy-pink mt-16 lg:py-24 py-12 px-4 overflow-hidden sm:px-6 lg:px-8 uppercase">
      <div className="max-w-screen-3xl ml-auto mr-auto lg:pr-96  flex lg:flex-row-reverse flex-col lg:justify-between">
        <nav className="lg:hidden flex flex-col text-sm">
          <div className="color-off-white px-6 py-2">
            <p>Main</p>
            <hr className="line bg-off-white m-0 my-2 align-text-left"></hr>
          </div>
          {
            navigation1.map((item, i) => (
              <div key={i} className="px-6 lg:py-2 py-0 color-off-white">
                <Link href={item.href}>
                  {item.name}
                </Link>
              </div>
            ))
          }
        </nav>
        <nav className="flex flex-col lg:mt-0 mt-4 text-sm">
          <div className="color-off-white px-6 py-2">
            <p>Talk To Us<br />Hello@HeySassy.com</p>
            <hr className="line bg-off-white m-0 my-2 align-text-left"></hr>
          </div>
          {
            navigation2.map((item, i) => (
              <div key={i} className="px-6 lg:py-2 py-0 color-off-white">
                <Link href={item.href}>
                  {item.name}
                </Link>
              </div>
            ))
          }
        </nav>
        <nav className="lg:flex hidden flex-col text-sm">
          <div className="color-off-white px-6 py-2">
            <p>Main</p>
            <hr className="line bg-off-white m-0 my-2 align-text-left"></hr>
          </div>
          {
            navigation1.map((item, i) => (
              <div key={i} className="px-6 lg:py-2 py-0">
                <a href={item.href} className="color-off-white">
                  {item.name}
                </a>
              </div>
            ))
          }
        </nav>
        <div className="px-6 py-2">
          <p className="lg:mt-0 mt-8 color-off-white lowercase text-sm">
            &copy; 2022 HeySassy.
          </p>
          <hr className="line bg-off-white m-0 my-2 align-text-left"></hr>
          <p className="color-off-white m-0 my-2 normal-case text-sm lg:py-2 py-0">
            Our vision is to design and deliver<br className="xl:hidden" /> fashion, while always keeping it fresh.
          </p>
        </div>

      </div>
    </footer>
  )
}