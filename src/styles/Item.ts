import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background: var(--c0);
  
  width: 100%;
  padding: .5rem 0;
  border-bottom: 2px solid var(--c300);
  margin-bottom: 0.5rem;

  &:hover{
    filter: brightness(50%);
    > span{
        display: flex;
    }
  }
  > span{
    width: 45px;
    height: 45px;
    border-radius: 99px;
    /* background: #000; */
    /* opacity: 0.8; */

    display: none;
    position: absolute;
    left: calc(50% - 22.5px);
    top: calc(50% - 17.5px);

    > svg{
    width: 32px;
    height: 32px;
    color: #Ff0;
    }
  }
`;
export const LeftSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    > h1{
        font-size:  1rem;
    }
`;
export const RightSide = styled.div`
    width:  52px;
    height: 52px;

    background: var(--c300);
`;
