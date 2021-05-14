import React from 'react'
import { FaFacebook,FaInstagram,FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMediaWrap,
    SocialLogo,
    SocialIconLink,
    SocialIcons,
    SocialMedia
} from './FooterItem';



const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to='/'>Pizza</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' rel='noopener noreferrer' aria-label='Youtube'>
                            <FaYoutube/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
