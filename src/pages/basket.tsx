import Head from 'next/head'

import { RiArrowRightSLine } from 'react-icons/ri'
import { DeliveryPlace, LeftSide, RightSide, Items, Button }  from '../styles/Basket';
import Item from '../components/Item';
import TotalPrice from '../components/TotalPrice';
import PaymentMethod from '../components/PaymentMethod';

export default function Basket() {
  return (
    <>
      <Head>
        <title>Caseirinhos | Basket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div  className="page">
        <h1>Carrinho</h1>

        <DeliveryPlace>
          <LeftSide></LeftSide>
          <RightSide>
            <h1>DeliveryPlace</h1>
            <p>Rua tal de tal</p>
            <RiArrowRightSLine/>
          </RightSide>
        </DeliveryPlace>
        
        <Items>
          <Item/>
          <Item/>
          <Item/>

          <Button>Adicionar mais  Itens</Button>
        </Items>

        <TotalPrice/>
        <PaymentMethod/>

        <Button className="FinalButton">
          Fazer Pedido
        </Button>
      </div> 
    </>
  )
}
