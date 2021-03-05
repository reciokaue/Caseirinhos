import Head from 'next/head'
import styled from 'styled-components';
import Product from '../components/Product';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Product/>
        <Product/>
      </Container> 
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`

