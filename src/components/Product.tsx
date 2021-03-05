import React from 'react';

import { Container, Image, Content,  Price}  from '../styles/Product';

const Product: React.FC = () => {
  return (
      <Container>
          <Image>

          </Image>
          <Content>
              <div>
                <p>
                    <h1>Brigadeiro</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aut ab .
                </p>
                <Price>
                    <h1>00,0</h1>
                    <h2>R$</h2>
                </Price>
              </div>
              <button>
                  Adicionar
              </button>
          </Content>
      </Container>
  );
}

export default Product;

