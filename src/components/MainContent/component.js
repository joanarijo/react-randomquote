import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const MainContent = (props) => {
    return (
        <div className="main">
        <Header/>
        <Content/>
        <Footer/>
        </div>
     );
}
 
export default MainContent;