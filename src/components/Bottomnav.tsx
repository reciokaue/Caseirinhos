import React, { useEffect, useState } from 'react';
import Link from 'next/link'

import { Container, Item } from '../styles/Bottomnav';
import { IoBasketOutline } from 'react-icons/io5'
import { BiInfoCircle, BiCookie } from 'react-icons/bi'

const Bottomnav: React.FC = () => {
    const [ active, setActive ] = useState('home')

    return (
        <Container>
            <Link href="/info">
                <Item
                    className={active === 'info' && 'active'}
                    onClick={() => setActive('info')}>
                    <BiInfoCircle/>
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
                    <IoBasketOutline/>
                </Item>
            </Link> 
        </Container>
    );
}
export default Bottomnav;