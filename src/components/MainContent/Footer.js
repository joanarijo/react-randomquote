import React from 'react';
import styled from '@emotion/styled';

const Footer = (props) => {
    const FooterContainer = styled.div`
        position: absolute;
        width: 100vw;
        bottom: 0;
        left: 0;
        z-index: 2;
    `
    const FooterWrap = styled.div`
        border-top: 1px solid white;
        position: relative;
        margin: 5% 7%;
        display: flex;
        justify-content: space-between; 
    `

    const Buttons = styled.div`
    `

    const Share = styled.button`
        background: blue;
        border: 0;
        color: white;
    `
    const Refresh = styled.button`
        background: pink;
        border: 0;
        color: white;
    `

    const Credits = styled.div`
       font-size: 11px; 
    `

    const Link = styled.a`
        text-decoration: none; 
    `
    return (
        
        <FooterContainer>
            <FooterWrap>
                <Buttons>
                    <Share>Share on Twitter</Share>
                    <Refresh className="refresh">Get new quote</Refresh>
                </Buttons>
                <Credits>Made with ❤ by <Link href="https://joanarijo.dev/">Joana Rijo</Link> • Quotes API by <Link href="http://forismatic.com/en/">Forismatic</Link></Credits>
            </FooterWrap>
        </FooterContainer>
        
     );
}
 
export default Footer;