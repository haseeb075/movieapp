import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all movies with the help of Async thunk
const allnewmovies = createAsyncThunk()

// set initialState of movieslice
const initialState = {
    movies: {}
} 

// create movieslice
const movieSlice = createSlice({
    name: "movies",
    initialState, 
    reducers: {
        // add actions inside of reducers 
         addMovies:(state, {payload}) => {
            // Whenever I get the movies from the payload, I need to update the state of my movies
            state.movies = payload;
            
            // {...state, ...payload} //Old way we get the initial state and returm the new 
         }
    },
    // extraReducers: {} //common method which you want to invoke but you have different type of actions
})

export const {addMovies} = movieSlice.actions;
// if I want to get a value from store
export const getAllMovies = (state) => state.movies.movies  // state.nameofreducer.propertyname

export default movieSlice.reducer  