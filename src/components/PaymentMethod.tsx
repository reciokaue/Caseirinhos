import React, { ReactNode, useState,  } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri'
import {
    Container,
    SelectedOption,
    DropdownContainer,
    OptionContainer,
    LeftSide,
    RightSide,
} from '../styles/PaymentMethod'

const PaymentMethod = () => {
    const DropdownItems = [
        {id: 1, title: 'dinheiro'},
        {id: 2, title: 'pix'},
        {id: 3, title: 'xerecard'},
    ];

    const [ open, setOpen ] = useState(false)
    const [ active, setActive ] = useState('dinheiro')

    function SwitchMethod(active: string){
        setOpen(!open)
        setActive(active)
    }

    return (
        <Container>
            <h1>Metodo de pagamento</h1>
            <SelectedOption onClick={() => SwitchMethod(active)}>
                <Option>
                    {active}
                </Option>
                <RiArrowDownSLine/>
            </SelectedOption>
            <DropdownContainer className={open && 'opened'}>
                {DropdownItems.map((item) =>
                    <Option  key={item.id}>
                        {item.title}
                    </Option>
                )}
            </DropdownContainer>
        </Container>
    );
    
    interface OptionProps{
        children: string
        subtitle?: string
    }
    
    function Option(props: OptionProps) {
        return(
            <OptionContainer onClick={() => SwitchMethod(props.children)}>
                <LeftSide></LeftSide>
                <RightSide>
                    <h1>{props.children}</h1>
                    <p>{props.subtitle}</p>
                </RightSide>
            </OptionContainer>
        )
    }
}

export default PaymentMethod;

function SwitchMethod(active: string) {
    throw new Error('Function not implemented.');
}
