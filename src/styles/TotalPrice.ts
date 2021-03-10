import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin-top: 2rem;
    > p, h1{
        display: flex;
        justify-content: space-between;

        text-align: flex-start;
    }
`;
