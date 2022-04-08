import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
// import { addMovies } from '../../features/movies/movieSlice'
// Now we call fetch AsyncMovie
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'



export default function Home() {
  
    // it should be async await so when I make an api call it should return promise
 

  // Whenever I get the values from API, I want to dispatch an action so after doing dispatch, 
  // this will go to the reducer and the reducer will update the state
  const dispatch = useDispatch();     

  // We have to fetch the data from omdbapi and put that data into redux store
  useEffect(()=> {
      // We dont want to fetch the movies in our component and then we dispatch the synchronouse action creator
      // So we have to remove this information from here and add in movie slice where asynce function is created and
      // call with async action creator which is fetchAsyncMovies
      // We are removing this piece of information
    //   const fetchMovies = async () => {
      
    // }

    // fetchMovies();

    // Called async Action Creator using dispatch
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  },[dispatch])


  return (
    <div>
      <div className="banner-img"></div>

      {/* We are going to list all the movies */}
      <MovieListing />
    </div>
  )
}
