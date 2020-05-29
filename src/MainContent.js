import React from 'react';

const MainContent = (props) => {
    return (
        <div className="main">
        <div className="header">
            <div className="header-wrap">
                <div className="logo">#randomquotes</div>
                <div className="github"><a href="https://github.com/joanarijo">logogithub</a></div>
            </div>
        </div>
        <div className="content">
            <h1 className="quote">You can only grow if you\'re willing to feel awkward and uncomfortable when you try something new.</h1>
            <h3 className="author">– Brian Tracy</h3>
        </div>
        <div className="footer">
            <div className="footer-wrap">
                <div className="buttons">
                    <button className="share">Share on Twitter</button>
                    <button className="refresh">Get new quote</button>
                </div>
                <div className="credits">Made with ❤ by <a href="https://github.com/joanarijo">Joana Rijo</a> • Quotes API by <a href="http://forismatic.com/en/">Forismatic</a></div>
            </div>
        </div>
        </div>
     );
}
 
export default MainContent;