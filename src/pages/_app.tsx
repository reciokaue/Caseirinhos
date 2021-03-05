import Bottomnav from '../components/Bottomnav'
import Navbar from '../components/Navbar'
import '../styles/_globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
          <Component {...pageProps} />
      <Bottomnav/>
    </>
  )
}
export default MyApp