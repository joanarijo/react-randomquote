import React from 'react';
import styled from '@emotion/styled';



const Content = ({quote, author}) => {
    
    const ContentContainer = styled.div`
        position: absolute;
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-flow: column;
        z-index: 1;
        padding-left: 5%;

        @media (min-width: 320px) and (max-width: 767px) {
            height: 90vh;
          }
        
    `
    const Quote = styled.h1`
        font-family: 'Playfair Display', Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 3.750em;
        line-height: 80px;
        padding-left: 5%;
        width: 70%;
        letter-spacing: 2px;
        
        @media (min-width: 768px) and (max-width: 1024px) {
            font-size: 3em;
        }

        @media (min-width: 320px) and (max-width: 767px) {
            font-size: 2em;
            line-height: 40px;
          }
    `
    const Author = styled.h3`
        font-family : IBM Plex Sans;
        font-weight: 500;
        font-size : 28px;
        padding-left: 5%;
        width: 70%;
        letter-spacing: 2px;

        @media (min-width: 320px) and (max-width: 767px) {
            font-size : 18px;
        }
    `
    return (
        
        <ContentContainer>
            <Quote>{quote}</Quote>
            <Author>{author}</Author>
        </ContentContainer>
        
     );
}
 
export default Content;