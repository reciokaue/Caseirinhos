import styled from 'styled-components';

export const Container = styled.div`
    & input:focus ~ label, & input:valid ~ label{
        background: var(--c100);
        padding: 0px 6px;
        width: fit-content;
        transform: scale(.75) translateY(-160%) translateX(-20%);
        color: var(--yellow);

        transition: 200ms;
    }

    margin-bottom: 10px;
    position: relative;
    margin-top: 10px;
    font-weight: 500;

    > input{
        border: solid 1.5px var(--c400);
        border-radius: 999px ;
        padding: 8px 15px;
        outline: 0;
        
        height: 44px;
        width: 312px;   
        background: transparent;
        &:focus{
            border: solid 1.5px var(--yellow) ;
            font-size: 14px;
        }
    }
    > label{
        position: absolute;
        left: 15px;
        top: 12px;
        transition: 200ms;

        text-align: left;
        font-size: 14px;

        padding: 0px 10px;
        
        display: flex;
        align-items: center;
        justify-content: flex-start;

        background: var(--c100);
    }
`;
