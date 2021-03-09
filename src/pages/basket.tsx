import Head from 'next/head'
import Product from '../components/Product';

export default function Basket() {
  return (
    <>
      <Head>
        <title>Caseirinhos | Basket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div  className="page">
        Voce ainda nao possui nada no carrinho
      </div> 
    </>
  )
}
