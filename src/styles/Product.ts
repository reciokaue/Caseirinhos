import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    margin-bottom: 1rem;
    max-width: 375px;
    width: 100%;
`;
export const Image = styled.div`
    background: var(--c100);
    height: 12rem;
    width: 100%;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 20px;
    margin-top: -30px;

    padding: 1.25rem;
    background: var(--c200); 

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

        background: var(--c300);
    }

    
    > p{

    }
`;
export const Price = styled.span`
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
