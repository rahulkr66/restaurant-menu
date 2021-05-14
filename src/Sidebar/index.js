import React from 'react';
import { SidebarContainer, Icons, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarItems';

const Sidebar = ({toggle,isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icons>
                <CloseIcon onClick={toggle}/>
            </Icons>
            <SidebarMenu>
                <SidebarLink to='/'>Pizza</SidebarLink>
                <SidebarLink to='/'>Dessert</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
