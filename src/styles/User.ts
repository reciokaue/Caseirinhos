import styled from 'styled-components';

export const Logo = styled.div`
    width: 160px;
    height: 160px;
    background: var(--c300);
    border-radius: 100px;
`;
export const Heading = styled.h1`
    margin-top: 2rem;
    font-size: 1rem;
    text-align: center;
    > p{
        font-size:  .75rem;
        color: var(--c400);
    }
    margin-bottom: 3rem;
`;
export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--c300);
    width: 15rem;
    height: 3rem;

    margin-top: 1rem;
    border-radius: 99px;
`;
