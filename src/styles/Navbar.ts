import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem 1.5rem;
    height: 7.5;

    position: fixed;
    top: 0;
    width: 100%;

    background: var(--c0);
    z-index: 999;
`
export const Topside = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    > h1{
        font-family: 'Dancing Script', cursive;
        font-size: 1.5rem;
    }
    > svg{
        width: 32px;
        height: 32px;
    }
`
export const Bottomside = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 1rem;

    > input{
        padding: 5px 10px;
        width: 100%;
        font-size: 1rem;
        border-radius: 100px;
        background: var(--c200);
    }

    > svg{
        width: 20px;
        height: 20px;

        position: absolute;
        right: 5px;
    }
`