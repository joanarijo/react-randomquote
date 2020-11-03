import React from 'react';
import styled from '@emotion/styled';

const Content = (props) => {
    const ContentContainer = styled.div`
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-flow: column;
        z-index: 1;
        padding-left: 5%;
    `
    const Quote = styled.h1`
        font-family: 'Playfair Display', Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 3.750em;
        line-height : 81px;
        padding-left: 7%;
        width: 70%;
    `
    const Author = styled.h3`
        font-family : IBM Plex Sans;
        font-weight: 500;
        font-size : 28px;
        padding-left: 7%;
    `
    return (
        
        <ContentContainer>
            <Quote>You can only grow if you\'re willing to feel awkward and uncomfortable when you try something new.</Quote>
            <Author>– Brian Tracy</Author>
        </ContentContainer>
        
     );
}
 
export default Content;