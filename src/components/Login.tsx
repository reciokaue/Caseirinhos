import React, { FormEvent, useState } from 'react';

import { Logo, Heading, Button, Container, ButtonForm, CloseForm, ModalFrame } from '../styles/Login';
import Input from './Input';
import { GrFormClose } from 'react-icons/gr'

import { Tab, Tabs, TabList, TabPanel,  } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import api from '../../database/api'

const Login: React.FC = () => {
    const [ opened, setOpen ] = useState(false) 
    const [ tabView, setTabView ] = useState(0)
    const [ showModal, setShowModal ] = useState(false)
    const [ modalText, setModalText ] = useState('')

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    
    async function  HandleLogin(event: FormEvent){
      event.preventDefault()
      const data = await api.post('user/login', {email: email, password: password})
      const message = data.data.message
      
      if(message === 'succeful' ){
        ShowModal(1500, message)
      }else{
        ShowModal(1500, message)
      }
      setOpen(false)
    }
    async function  HandleSignUp(event: FormEvent){
      event.preventDefault()
      const data = await api.post('user/signup', {name: name, email: email, password: password})
      
      if(data.data !== '' ){
        ShowModal(1500, data.data.message)
        setTimeout(function() {
          OpenFormLogin()
        }, 2500);
      }else{
        ShowModal(1500, 'As informações estão incorretas')
      }
      setOpen(false)
    }
    
    return (
      <>
        <Logo/> 
        <Heading>
            Bem vindo
            <p>Seja muito bem vindo</p>
        </Heading>
        <Button onClick={OpenFormLogin}>Fazer Login</Button>
        <Button  onClick={OpenFormRegister}>Cadastrar-se</Button>

        <Modal tilte={modalText} open={showModal}/>

        {/* FORM */}
        <Container className={opened && 'opened'}>
          <Tabs selectedIndex={tabView}  onSelect={index => setTabView(index)}>
            <TabList>
              <Tab>Login</Tab>/
              <Tab>Register</Tab>
              <CloseForm onClick={() => setOpen(false)}><GrFormClose/> </CloseForm>
            </TabList>

            <TabPanel>
              <Input state={setEmail} placeholder="Email" />
              <Input state={setPassword} placeholder="Senha" />

              <ButtonForm onClick={HandleLogin}>Entrar</ButtonForm>
            </TabPanel>
            <TabPanel>
              <Input state={setName} placeholder="Nome" />
              <Input state={setEmail} placeholder="Email" />
              <Input state={setPassword} placeholder="Senha" />

              <ButtonForm onClick={HandleSignUp}>Registrar-se</ButtonForm>
            </TabPanel>
          </Tabs>
        </Container>
    </>
  );
  
  function OpenFormLogin(){
    setTabView(0)
    setOpen(true)
  }
  function OpenFormRegister(){
    setTabView(1)
    setOpen(true)
  }
  
  function ShowModal(time: number, text: string){
    setModalText(text)
    setShowModal(true)
    
    setTimeout(function() {
      setShowModal(false)
    }, time);
  }
  interface ModalProps{
    open: boolean
    tilte: string
  }
  function Modal(props: ModalProps){
    return(
      <ModalFrame style={{opacity: props.open? '90%': '00%'}}>
          <h3>{props.tilte}</h3>
      </ModalFrame>
    )
  }
}

export default Login;