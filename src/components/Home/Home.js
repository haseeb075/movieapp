import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'



export default function Home() {
  
    // it should be async await so when I make an api call it should return promise
    const movieText = "harry";

  // Whenever I get the values from API, I want to dispatch an action so after doing dispatch, 
  // this will go to the reducer and the reducer will update the state
  const dispatch = useDispatch();     

  // We have to fetch the data from omdbapi and put that data into redux store
  useEffect(()=> {
 
      const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err)=> {
        console.log("err", err);
      });   
      
      // console.log("response from api",response);
      // we need to dispatch an action and our action is addMovies
      dispatch(addMovies(response.data))
    }

    fetchMovies();
  },[])


  return (
    <div>
      <div className="banner-img"></div>

      {/* We are going to list all the movies */}
      <MovieListing />
    </div>
  )
}
