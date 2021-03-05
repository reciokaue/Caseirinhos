import React from 'react';
import styled from 'styled-components';

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    max-width: 375px;
    width: 100%;
    margin-bottom: 1rem;
`;
const Image = styled.div`
    background: var(--c200);
    height: 12rem;
    width: 100%;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    > button{
        margin-top: 1rem;

        width: 100%;
        padding: .75rem;
        border-radius: 99px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    border-radius: 20px;
    margin-top: -30px;

    padding: 1.25rem;
    background: var(--c250); 
    
    > p{

    }
`;
const Price = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >h1{
        font-size: 2.25rem;
        line-height: 2.5rem
    }
    >h2{
        font-size: 4rem;
        line-height: 1;
    }
`;
