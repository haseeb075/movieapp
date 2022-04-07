import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'

export default function Home() {

  // We have to fetch the data from api and put that data into redux store
  useEffect(()=> {
    // it should be async await so when I make an api call it should return promise
    const movieText = "spiderman";
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err)=> {
        console.log("err", err);
      });   
      console.log("response from api",response);
    }

    fetchMovies();
  },[])

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}
