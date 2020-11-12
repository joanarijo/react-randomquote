import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// random rgb color for background
const colors = ["#1b2d5a", "#703f97", "#1b1b1d", "#006dd5", "#7854c9", "#19826e", "#dc2240"];
var color = colors[Math.floor(Math.random() * colors.length)];



const MainContent = ({quote, author}) => {

    const Main = styled.div`
        width: 100%;
        height: 100vh;
        background-color: ${color};
        color: white;
    `

    return (
        <Main>
            <Header/>
            <Content quote={quote} author={author}/>
            <Footer quote={quote} author={author}/>
        </Main>
     );
}
 
export default MainContent;