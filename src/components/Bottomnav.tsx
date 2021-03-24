import React, { useState } from 'react';
import Link from 'next/link'

import { Container, Item, ActiveBar } from '../styles/Bottomnav';
import { BiShoppingBag, BiUserCircle, BiCookie } from 'react-icons/bi'

const Bottomnav: React.FC = () => {
    const [ active, setActive ] = useState('home')

    return (
        <Container>
            <Link href="/login">
                <Item
                    className={active === 'login' && 'active'}
                    onClick={() => setActive('login')}>
                    <BiUserCircle/>
                </Item>
            </Link>
            <Link href="/">
                <Item
                    className={active === 'home' && 'active'}
                    onClick={() => setActive('home')}>
                    <BiCookie/>
                </Item>
            </Link> 
            <Link href="/basket">
                <Item
                    className={active === 'basket' && 'active'}
                    onClick={() => setActive('basket')}>
                    <BiShoppingBag/>
                </Item>
            </Link> 
            <ActiveBar className={
                active === "login"? "left": "" + 
                active === "home"? "middle": "" + 
                active === "basket"? "right": ""
            }/>
        </Container>
    );
}
export default Bottomnav;
