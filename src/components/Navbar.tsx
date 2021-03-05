import React from 'react';

import { Container, Topside, Bottomside } from '../styles/Navbar';
import { BiCookie } from 'react-icons/bi'
import { IoMdSearch } from 'react-icons/io'

const Navbar: React.FC = () => {
  return (
    <Container>
        <Topside>
            <h1>Caseirinhos</h1>
            <BiCookie/>
        </Topside>
        <Bottomside>
            <input placeholder="O que deseja comer?" type="text"/>
            <IoMdSearch/>
        </Bottomside>
    </Container>
  );
}
export default Navbar;