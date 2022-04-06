import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../apis/movieApi'
import { APIKey } from '../../apis/movieApiKey'

export default function Home() {

  // We have to fetch the data from api and put that data into redux store
  useEffect(()=> {

    const movieText = "Harry"
    // it should be async await so when I make an api call it should return promise
    const fetchMovies = async () => {

      // get api with apikey and search term (to find which movies you want ) and type of that api will be movies
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch()
    }
  })

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}
