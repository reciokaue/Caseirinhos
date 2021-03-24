import Head from 'next/head'
import Product from '../components/Product';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Caseirinhos | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page">
        {/* <h1>{data.name}</h1> */}


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
export const getServerSideProps = async () => {
  // const  { userID } = useContext(LoginContext)

  // const response = await api.get(`user/${userID}`);
  // const data = await response.json()

  const res = await fetch(`http://localhost:3000/api/user/5`)
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}