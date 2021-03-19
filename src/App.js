import React from 'react';
import Row from './Row';
import './App.css';
import request from './Request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/**Nav bar */}
        <Nav />
      {/**Banner */}
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}  isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Documentaries Movies" fetchUrl={request.fetchDocumentaries}/>
         </div>
  );
}

export default App;
