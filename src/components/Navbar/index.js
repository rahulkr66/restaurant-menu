import React from 'react';
import { Nav,NavLink,NavIcon,Bars } from './NavbarItems';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav onClick={toggle}>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
