import Head from 'next/head'

import { Logo, Heading, Button }  from '../styles/User';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Caseirinhos | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        <Logo/> 

        <Heading>
            Bem vindo
            <p>Seja muito bem vindo</p>
        </Heading>

        <Button>Fazer Login</Button>
        <Button>Cadastrar-se</Button>
      </div> 
    </>
  )
}