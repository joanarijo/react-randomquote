import React from 'react';
import styled from '@emotion/styled';
import { TwitterShareButton } from "react-share";
import twitter from '../twitter.svg';
import reload from '../reload.svg';


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
        margin: 2% 5%;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        padding-top: 50px;
    `

    const Buttons = styled.div`
        padding-left: 5%;
    `

    const Share = styled.a`
        background: #0095d5;
        border: 0;
        color: white;
        padding: 10px 20px;
        font-family : 'IBM Plex Sans', Arial, Helvetica, sans-serif;
        font-weight: 300;
    `

    const Refresh = styled.a`
        background: #b43f97;
        border: 0;
        color: white;
        cursor: pointer;
        padding: 10px 20px;
        font-family : 'IBM Plex Sans', Arial, Helvetica, sans-serif;
        font-weight: 300;
    `

    const Credits = styled.div`
       font-size: 11px; 
       padding-right: 5%;
    `

    const Link = styled.a`
        text-decoration: none;
        color: yellow; 
    `

    const Icon = styled.img`
        width: 20px;
        height: 20px;
        color: white;
        vertical-align: middle; 
        display: inline-block;
        margin-left: 20px;
    `

    const style = {
        margin: '0px 10px 0px 0px',
        outline: 'none'
        
    };

    return (
        
        <FooterContainer>
            <FooterWrap>
                <Buttons>
                    <TwitterShareButton title={tweet} via={"joanarijo"} url={"netlifylink.com"} style={style}>    
                        <Share>Share <Icon src={twitter} alt="twitter" /></Share>
                    </TwitterShareButton>
                    <Refresh onClick={refreshPage}>Get a New Quote <Icon src={reload} alt="reload" /></Refresh>
                </Buttons>
                <Credits>Made with ❤ by <Link href="https://joanarijo.dev/">Joana Rijo</Link> • Quotes API by <Link href="http://forismatic.com/en/">Forismatic</Link></Credits>
            </FooterWrap>
        </FooterContainer>
        
     );
}
 
export default Footer;