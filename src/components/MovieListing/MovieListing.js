import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"

export default function MovieListing() {
  // List all movies, i can make use of useSelector
  const allmovies = useSelector(getAllMovies);
  console.log("allmovies", allmovies);

  const allshows = useSelector(getAllShows);
  console.log("allshows",allshows);

  let renderMovies, renderShows = ""
  
  // Render Shows
  renderMovies =
    allmovies.Response === "True" ? (
      allmovies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">{allmovies.Error}</div>
    );


    // Render shows
    renderShows =
    allshows.Response === "True" ? (
      allshows.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="shows-error">{allmovies.Error}</div>
    );



  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
}
