import React from 'react';
import styled from '@emotion/styled';
import {TwitterShareButton } from "react-share";

const Footer = ({quote, author}) => {

    const tweet = quote + "- " + author;
    const refreshPage = () => window.location.reload(false);

    const FooterContainer = styled.div`
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 2;
    `
    const FooterWrap = styled.div`
        border-top: 1px solid white;
        position: relative;
        margin: 5%;
        display: flex;
        justify-content: space-between; 
        align-items: center;
    `

    const Buttons = styled.div`
    `

    const Share = styled.a`
        background: blue;
        border: 0;
        color: white;
    `
    const Refresh = styled.a`
        background: pink;
        border: 0;
        color: white;
        cursor: pointer;
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
                    <TwitterShareButton url={"teste.com"} title={tweet}>
                        
                    <Share className="refresh">Share on Twitter</Share>
                    </TwitterShareButton>
                    <Refresh onClick={refreshPage}>Get new quote</Refresh>
                </Buttons>
                <Credits>Made with ❤ by <Link href="https://joanarijo.dev/">Joana Rijo</Link> • Quotes API by <Link href="http://forismatic.com/en/">Forismatic</Link></Credits>
            </FooterWrap>
        </FooterContainer>
        
     );
}
 
export default Footer;