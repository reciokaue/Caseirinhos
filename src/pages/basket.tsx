import Head from 'next/head'
import Product from '../components/Product';

export default function Carrinho() {
  return (
    <>
      <Head>
        <title>Caseirinhos | Carrinho</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div  className="page">
        <Product/>
      </div> 
    </>
  )
}
