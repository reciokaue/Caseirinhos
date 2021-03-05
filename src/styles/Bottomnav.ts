import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    bottom: 0;
    width: 100%;
    
    height: 60px;

    padding: 1rem 1rem;
    border-top: 1.5px solid var(--c200);
    background: var(--c0);
`;
export const Item = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    
    &.active{
        color: var(--yellow);
    }
    > svg{
        width: 32px;
        height: 32px;
    }
`;