import React,{useState} from 'react'
import { HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from './HeroItems';
import Navbar from '../Navbar';
import Sidebar from '../../Sidebar';
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever!</HeroH1>
                    <HeroP>Ready in 60 minutes!</HeroP>
                    <HeroBtn>Place Order!</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
