 import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/movieSlice"
// store ready for the app
 export const store = configureStore({
    //  We have to add reducers in store
    reducer: {
        movies: moviesReducer
    },  
 })