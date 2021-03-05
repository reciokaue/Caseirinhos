import React from 'react';

import styled from 'styled-components';
import { IoBasketOutline } from 'react-icons/io5'
import { BiInfoCircle, BiCookie } from 'react-icons/bi'

const Bottomnav: React.FC = () => {
  return (
      <Container>
          <Item><BiInfoCircle/></Item>
          <Item><BiCookie/></Item>
          <Item><IoBasketOutline/></Item>
      </Container>
  );
}
export default Bottomnav;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 1rem 1rem;
    border-top: 1.5px solid var(--c00);
    background: var(--c0);
`;
const Item = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    flex: 1;
    > svg{
        width: 32px;
        height: 32px;
    }
`;