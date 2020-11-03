import React from 'react';


const Footer = (props) => {
    return (
        
        <div className="footer">
            <div className="footer-wrap">
                <div className="buttons">
                    <button className="share">Share on Twitter</button>
                    <button className="refresh">Get new quote</button>
                </div>
                <div className="credits">Made with ❤ by <a href="https://joanarijo.dev/">Joana Rijo</a> • Quotes API by <a href="http://forismatic.com/en/">Forismatic</a></div>
            </div>
        </div>
        
     );
}
 
export default Footer;