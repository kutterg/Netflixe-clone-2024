//axios use to feach data or baseurl place
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //base URL start for all movie acess(initial axios)

});
// instance.get("/movie/top-rated");
//https://api.themoviedb.org/3/movie/top-rated

export default instance;


//for movie//https://api.themoviedb.org/3/discover/tv?api_key=9a23e9a8212b4d3000a10c25901b4430&with_networks=213

//for img//https://image.tmdb.org/1/p/originall
