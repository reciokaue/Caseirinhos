import Head from 'next/head'
import Product from '../components/Product';

export default function Home() {
  return (
    <>
      <Head>
        <title>Caseirinhos | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div> 
    </>
  )
}