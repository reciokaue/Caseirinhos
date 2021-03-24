import styled from 'styled-components';

export const Logo = styled.div`
    width: 160px;
    height: 160px;
    background: var(--c300);
    border-radius: 100px;
`
export const Heading = styled.h1`
    margin-top: 2rem;
    font-size: 1rem;
    text-align: center;
    > p{
        font-size:  .75rem;
        color: var(--c400);
    }
    margin-bottom: 3rem;
`
export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--c300);
    width: 15rem;
    height: 3rem;

    margin-top: 1rem;
    border-radius: 99px;
`
export const Container = styled.div`
  align-items: center;
  flex-direction: column;

  position: fixed;
  z-index: 99;
  bottom: 0;

  width: 100%;
  padding: 2rem 2rem 3rem;
  height: fit-content;
  
  border-radius: 55px 55px 0 0;
  background: var(--c100);

  transition: 1s;

  display: none;
  &.opened{
    display: flex;
  }
  filter: drop-shadow(0px -12px 7px rgba(0, 0, 0, 0.1));

  .react_tabs{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 1s;
  }
  .react-tabs__tab-list{
    border: none!important;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .react-tabs__tab-panel--selected {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .react-tabs__tab:focus {
    box-shadow: none;
    border: none;
    outline: none;
  }
  .react-tabs__tab:focus:after {
    display: none;
  }
  .react-tabs__tab{
    background: var(--c100);
    border: none;
  }
  .react-tabs__tab--selected{
    color: var(--yellow);
  }
`
export const CloseForm = styled.span`
  position: absolute;
  right: 10%;
  width: 25px;
  height: 25px;

  > svg{
    width: 25px;
    height: 25px;
  }
`
export const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: .5rem 3rem;
  border-radius: 999px;
  margin-top: 1rem;

  background: var(--yellow);
  filter: brightness(95%);
`
export const ModalFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: absolute;
    top: 20%;
    max-width: 80%;
    text-align: center;
    filter: drop-shadow(0px 12px 7px rgba(0, 0, 0, 0.1));

    background: var(--c100);
    padding: 1rem 2rem 3rem;
    border-radius: 12px;
    transition: 1s;
`
