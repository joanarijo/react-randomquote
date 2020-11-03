import React from 'react';

import MainContent from './components/MainContent/component';
import './App.css';

function App() {
  const data = async () => {

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en&callback=?';

    const apiRes = await fetch(proxyUrl + apiUrl);

    // convert data to json
    const resJSON = await apiRes.json();
    return resJSON;
  }
  data().then(res => {
    
    console.log(res.quoteText);
    console.log(res.quoteAuthor);
  
  });


  return (
    <div className="App">
      <MainContent/>
    </div>
  );
}

export default App;
