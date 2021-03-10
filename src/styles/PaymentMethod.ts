import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  margin-top: 3rem;
  text-align: flex-start;

  > h1{
      font-size: 1rem;
      padding-bottom: .5rem;
  }
`;
export const SelectedOption = styled.div`
    display: flex; 
    width: 100%;
    position: relative;

    border-bottom: 3px solid var(--c300);
    margin-bottom: .5rem;

    > svg{
        width: 32px;
        height: 32px;

        position: absolute;
        right: 0;
        top: 20%;
    }
`;
export const DropdownContainer = styled.div`
    display: flex;
    background: var(--c0);
    flex-direction: column;

    height: 0px;
    overflow: hidden;
    transition: 400ms;
    &.opened{
        height: 170px;
        transition: 400ms;
    }
`;


export const OptionContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: .5rem;
    background: var(--c0);
    &:hover{
        filter: brightness(80%);
    }
`
export const LeftSide = styled.div`
    width: 52px;
    height: 52px;
    background: var(--c300);
`
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 1rem;

    > h1{
      font-size: 1rem;
      font-weight: 500;
  }
`