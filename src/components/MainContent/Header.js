import React from 'react';
import styled from '@emotion/styled';
import github from '../github.svg';


const Header = (props) => {

    const HeaderContainer = styled.div`
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    `
    const HeaderWrap = styled.div`
        border-bottom: 1px solid white;
        position: relative;
        margin: 2% 5%;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        padding-bottom: 20px;
    `
    const Logo = styled.h1`
        font-family : 'IBM Plex Sans', Arial, Helvetica, sans-serif;
        font-weight: 300;
        font-size : 20px;
        color : #FFFFFF;
        opacity : 0.7;
        padding-left: 5%;
    `

    const Code = styled.a`
        padding-right: 5%;
    `

    const Icon = styled.img`
        width: 30px;
        height: 30px;
    `

    return (
        <HeaderContainer>
            <HeaderWrap>
                <Logo>#randomquote</Logo>
                <Code href="https://github.com/joanarijo/react-randomquote" target='_blank'><Icon src={github} alt="github" /></Code>
            </HeaderWrap>
        </HeaderContainer>
     );
}
 
export default Header;