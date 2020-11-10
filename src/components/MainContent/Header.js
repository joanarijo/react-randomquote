import React from 'react';
import styled from '@emotion/styled';


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
        margin: 5%;
        display: flex;
        justify-content: space-between; 
        align-items: center;
    `
    const Logo = styled.h1`
        font-family : 'IBM Plex Sans', Arial, Helvetica, sans-serif;
        font-weight: 300;
        font-size : 20px;
        color : #FFFFFF;
        opacity : 0.7;
    `
    const Code = styled.a`
        text-decoration: none;
    `

    return (
        <HeaderContainer>
            <HeaderWrap>
                <Logo>#randomquote</Logo>
                <Code href="https://github.com/joanarijo/react-randomquote">logogithub</Code>
            </HeaderWrap>
        </HeaderContainer>
     );
}
 
export default Header;