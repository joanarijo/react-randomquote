import React from 'react';
import styled from '@emotion/styled';
import { TwitterShareButton } from "react-share";
import twitter from '../twitter.svg';
import reload from '../reload.svg';


const Footer = ({quote, author}) => {

    const tweet = quote + author;
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
        margin: 2% 5% 0 5%;
        padding-bottom: 50px;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        padding-top: 50px;

        @media (min-width: 320px) and (max-width: 767px) {
            justify-content: space-around;
            flex-flow: column;
            padding-bottom: 30px;
          }
    `

    const Buttons = styled.div`
        padding-left: 5%;

        @media (min-width: 320px) and (max-width: 767px) {
            padding-left: 0;
        }
    `

    const Share = styled.a`
        background: #0095d5;
        border: 0;
        color: white;
        padding: 10px 20px;
        font-family : 'IBM Plex Sans', Arial, Helvetica, sans-serif;
        font-weight: 300;

        &:hover{
            background: #0088b7;

            img{
                -webkit-transition: .4s;
                transition: .4s;
                transform: rotate(45deg);
            }
        }
    `

    const Refresh = styled.a`
        background: #b43f97;
        border: 0;
        color: white;
        cursor: pointer;
        padding: 10px 20px;
        font-family : 'IBM Plex Sans', Arial, Helvetica, sans-serif;
        font-weight: 300;

        &:hover{
            background: #a53c8e;

            img{
                -webkit-transition: .4s;
                transition: .4s;
                transform: rotate(45deg);
            }
        }
    `

    const Credits = styled.div`
        font-family : 'IBM Plex Sans', Arial, Helvetica, sans-serif;
        font-weight: 300;    
        font-size: 11px; 
        padding-right: 5%;
        letter-spacing: 1px;

        @media (min-width: 320px) and (max-width: 767px) {
            margin-top: 20px;
            padding-right: 0;
        }
    `

    const Link = styled.a`
        text-decoration: none;
        font-weight: 500;
        color: white; 
        border-bottom: 2px solid #b43f97;
    `
    const Span = styled.span`
    color: #b43f97; 
    `

    const Icon = styled.img`
        width: 20px;
        height: 20px;
        color: white;
        vertical-align: middle; 
        display: inline-block;
        margin-left: 20px;

        @media (min-width: 320px) and (max-width: 767px) {
            margin-left: 10px;
        }
    `

    const style = {
        margin: '0px 10px 0px 0px',
        outline: 'none'
        
    };

    return (
        
        <FooterContainer>
            <FooterWrap>
                <Buttons>
                    <TwitterShareButton title={tweet} via={"joanarijo"} url={"https://randomquote-jr.netlify.app"} style={style}>    
                        <Share>Share <Icon src={twitter} alt="twitter" /></Share>
                    </TwitterShareButton>
                    <Refresh onClick={refreshPage}>Get a New Quote <Icon src={reload} alt="reload" /></Refresh>
                </Buttons>
                <Credits>Made with <Span>❤</Span> by <Link href="https://joanarijo.dev/" target='_blank'>Joana Rijo</Link> • Quotes API by <Link href="http://forismatic.com/en/api/" target='_blank'>Forismatic</Link></Credits>
            </FooterWrap>
        </FooterContainer>
        
     );
}
 
export default Footer;