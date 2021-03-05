import React from 'react';

import styled from 'styled-components';
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem 1.5rem;
    height: 7.5;

    position: sticky;
    top: 0;
    left: 0;
    right: 0;

    background: var(--c0);
`
const Topside = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    > h1{
        font-family: 'Dancing Script', cursive;
        font-size: 1.5rem;
    }
    > svg{
        width: 32px;
        height: 32px;
    }
`
const Bottomside = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 1rem;

    > input{
        padding: 5px 10px;
        width: 100%;
        font-size: 1rem;
        border-radius: 100px;
        background: var(--c200);
    }

    > svg{
        width: 20px;
        height: 20px;

        position: absolute;
        right: 5px;
    }
`