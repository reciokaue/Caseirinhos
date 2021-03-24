import Head from 'next/head'

import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext'

import Login from '../components/Login';
// import Profile from '../components/Profile';

export default function User() {
  const { userID } = useContext(LoginContext)
  
  return (
    <>
      <Head>
        <title>Caseirinhos | Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
          <Login/>
      </div> 
    </>
  )
}