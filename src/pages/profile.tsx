import React, { useContext, useEffect, useState } from 'react';
// import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
// import { Button } from '../styles/Basket';

// import { Container } from './styles';
// import { LoginContext, useContextLogin } from '../context/LoginContext'
// import PersonInterface from '../../models/PersonInterface';
// import api from '../../database/api';

// export interface data{
//   response: PersonInterface
// }



export default function Profile({ data }) {
  return (
      <div className="page">
        <h1>{data.name}</h1>
      </div> 
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


// function Profile({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //   const  { userID, logOut } = useContext(LoginContext)
//   // const  { products, setProducts } = useState<PErson>()

//   // useEffect(() => {
//   //   api.get(`user/${userID}`).then((response) => {
//   //     console.log(response.data);
//   //   });
//   // }, []);
//   console.log(data)
  
//     return (
//       <div>
//         MEU DEUSS { userID }
//         <br/>
//         {data}
//         <br/>
//         <Button onClick={logOut}>
//           Deslogar
//         </Button>
//       </div>
//     );
//   }
  
// export default Profile;
