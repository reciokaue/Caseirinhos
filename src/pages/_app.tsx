import Bottomnav from '../components/Bottomnav'
import Navbar from '../components/Navbar'
import './_globals.css'
import styled from 'styled-components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
        <Container>
          <Component {...pageProps} />
        </Container>
      <Bottomnav/>
    </>
  )
}
export default MyApp

const Container = styled.div`
  padding: 1rem 1.5rem 3rem;
  margin-bottom: 4.063rem;
`;

