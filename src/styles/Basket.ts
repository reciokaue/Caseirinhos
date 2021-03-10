import styled from 'styled-components';

export  const DeliveryPlace = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 2rem;
`;
export  const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 65px;
    height: 65px;
    background:  var(--c300);
`;
export  const RightSide = styled.div`
    display: flex;
    justify-content:  center;
    align-items: flex-start;
    flex-direction: column;

    position: relative;
    padding-left: 20px;
    flex: 1;

    >  h1{
        font-size: 1rem;
    }
    > svg{  
        position: absolute;
        right: 0;

        width: 32px;
        height: 32px;
    }
`;

export const Items = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
    flex-direction: column;
    width: 100%;
`;
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    padding: 1rem 2rem;
    border-radius: 99px;

    margin-top: 2rem;
    background: var(--c200);

    &.FinalButton{
        width: 100%;
        background: var(--c300);
        font-weight: 700;
    }
`;