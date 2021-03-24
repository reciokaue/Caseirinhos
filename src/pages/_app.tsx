import Bottomnav from '../components/Bottomnav'
import Navbar from '../components/Navbar'
import { LoginProvider } from '../context/LoginContext'
import '../styles/_globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Navbar/>
          <Component {...pageProps} />
      <Bottomnav/>
    </LoginProvider>
  )
}
export default MyApp