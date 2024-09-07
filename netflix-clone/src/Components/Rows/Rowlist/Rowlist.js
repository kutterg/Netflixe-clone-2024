import React from 'react'
import Row from '../Row/Row'
import requests from '../../../Utils/requests';

//write here title and feachurl from requests

const Rowlist = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* <-- to make another row  */}


<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
<Row title="Ronance Movies" fetchUrl={requests.fetchRomanceMovies} />
<Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />






      {/* <Row />
      <Row />
      <Row /> */}
    </>
  ); //reusablity from row component of props of (title, fetchUrl, isLargeRow)
}

export default Rowlist;
