import React from 'react';

import { Container } from '../styles/TotalPrice';

const TotalPrice: React.FC = () => {
  return (
      <Container>
          <p>Subtotal <span>R$0,00</span></p>
          <p>Taxa de entrega <span>R$0,00</span></p>
          <h1>Total <span>R$0,00</span></h1>
      </Container>
  );
}

export default TotalPrice;