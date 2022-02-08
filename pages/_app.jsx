import 'tailwindcss/tailwind.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Layout from '../components/Layout'
import ShopProvider from '../context/shopContext'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs'

const publicPages = ['/']
// Supplying a theme prop for clerk
 const theme = {
    general: {
      color: "#fb8122",
      backgroundColor: "#ffffef",
      fontColor: "#1d2228",
      labelFontWeight: "300",
      borderRadius: "0px",
    },
    buttons: {
      fontColor: "#333",
    },
 }



function MyApp({ Component, pageProps }) {
  // Get the pathname
  const { pathname } = useRouter();
  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname)
  const router = useRouter()

  return (
    <ClerkProvider theme={theme}>
      {isPublicPage ? (
        <ShopProvider>
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        </ShopProvider>

      ) : (
        <>
          <SignedIn>
            <ShopProvider>
              <Layout>
                <Component {...pageProps} key={router.asPath} />
              </Layout>
            </ShopProvider>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
      {/* <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider> */}
    </ClerkProvider>
  )
}

export default MyApp


