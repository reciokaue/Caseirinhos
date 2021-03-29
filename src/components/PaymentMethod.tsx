import React, { ReactNode, useState,  } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import {
    Container,
    SelectedOption,
    DropdownContainer,
    OptionContainer,
    LeftSide,
    RightSide,
} from '../styles/PaymentMethod'

const PaymentMethod = () => {
    const options = [
        'dinheiro', 'cartao de credito', 'pixx', 
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
                {options.map((item) =>
                    <Option  key={item}>
                        {item}
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
                    <h1 className={props.children === active && 'active'}>{props.children}</h1>
                </RightSide>
            </OptionContainer>
        )
    }
}

export default PaymentMethod;
