import React from 'react';
import styled from '@emotion/styled';


import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// random rgb color for background
const colors = ["#1b2d5a", "#1c5653", "#3e6830"];
var color = colors[Math.floor(Math.random() * colors.length)];



const MainContent = (props) => {

    const Main = styled.div`
        width: 100%;
        height: 100vh;
        background-color: ${color};
        color: white;
    `

    return (
        <Main>
            <Header/>
            <Content/>
            <Footer/>
        </Main>
     );
}
 
export default MainContent;