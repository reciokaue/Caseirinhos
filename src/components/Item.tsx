import React from 'react';

import { Container, LeftSide, RightSide, } from '../styles/Item';
import { GrFormClose } from 'react-icons/gr'

const Item: React.FC = () => {
  return (
    <Container>
      <span>
        <GrFormClose/>
      </span>
      <LeftSide>
        <h1>Brigadeiro</h1>
        <p>R$3.50</p>
      </LeftSide>
      <RightSide></RightSide>
    </Container>
  );
}

export default Item;