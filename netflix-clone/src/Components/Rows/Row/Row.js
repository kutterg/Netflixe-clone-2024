import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../Utils/axios";//from utils
// import axios from "axios";


// import YouTube from "@mui/icons-material/YouTube";
import movieTrailer from "movie-trailer";//(movieTrailer)its bring the link from youtube(check on console.leg) //instal on terminal  npm i movie-trailer
import YouTube from "react-youtube";//npm i react-youtube

const Row = ({ title, fetchUrl, isLargeRow }) => {
  //title, fetchUrl, isLargeRow those come from Rowlist

  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); ////this empty state of trailerUrl

  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        // `http://localhost:4000/api/${fetchUrl}`
        // );
        console.log(request);

        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]); //(dependecey array)//[fetchUrl]); means when (fetchUrl changed) you get new thing render one by one
  // [fetchUrl]);

  const handleClick = (movie) => {
    //when i click single movie
    if (trailerUrl) {
      //its say trailerUrl is present
      setTrailerUrl("");
      //if it is present make setTrailerUrl empty //'check on npm website'
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original.name).then(
        (url) => {
          //if not present by using movieTrailer grab by title or name or original name
          console.log(url);
          //give url
          const urlParams = new URLSearchParams(new URL(url).search);
          //by using parse(params):-  URLSearchParams then take out what ever you need data
          console.log(urlParams);
          //its display my urlparams on console

          //https://www.youtube.com/watch?v=6hlDgMrYUmc
          //Row.js:49 URLSearchParams
          //console.log(urlParams.get("v")); //Row.js:52 6hlDgMrYUmc

          console.log(urlParams.get("v")); //take out the video data
          //means the video audio
          setTrailerUrl(urlParams.get("v")); //by using 6hlDgMrYUmc setTrailerUrl
        }
      );
    }
  };
  const opts = {
    height: "390",
    //height display by 390
    width: "100%",
    //width 100% means end to end
    playerVars: {
      autoplay: 1,
      //when we click automaticaly play
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)} //when i click the img then under the image its show movie(trailer)
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster $ {isLargeRow && "row_posterLarge")`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
      {/* <--- if only trailerurl is present display use YouTube the use trailerUrl
      id(6hlDgMrYUmc) then play */}
    </div>
  );
};

export default Row;

//when we click to see trailer install 2things:-
//1. npm i movie-trailer
//2.npm i react-youtube //:- if i get movie id from YouTube its display YouTube trailer 
