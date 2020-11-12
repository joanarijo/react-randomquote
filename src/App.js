import React, { useState, useEffect } from 'react';

import MainContent from './components/MainContent/component';
import './App.css';

function App() {

  const [data, setData] = useState([]);
   
  useEffect(() => {
    //solves the lack of api's CORS headers
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&callback=?';
    fetch(proxyUrl + apiUrl, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  return (
    <div>
      <MainContent 
        quote={data.quoteText}
        author={data.quoteAuthor}
      />
    </div>
  );
}

export default App;
