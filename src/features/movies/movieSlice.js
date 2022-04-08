import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

// ASYNC THUNK PART

// Fetchingmovies with the help of Async thunk
// createAsyncThunk(string/identifier[movies] , payload creator callback function, third parameter which is {} )
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "harry";
    // Removed from fetch movies usEffect and add here
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    //   .catch((err)=> {
    //     console.log("err", err);
    //   });

    // console.log("response from api",response);
    // we need to dispatch an action and our action is addMovies
    // dispatch(addMovies(response.data));

    // We dont want to dispatch anything we will return the response.data
    return response.data;
  }
);

// Fetching Shows with the help of Async thunk
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    // Removed from fetch movies usEffect and add here
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    );
    //   .catch((err)=> {
    //     console.log("err", err);
    //   });

    // console.log("response from api",response);
    // we need to dispatch an action and our action is addMovies
    // dispatch(addMovies(response.data));

    // We dont want to dispatch anything we will return the response.data
    return response.data;
  }
);

// NORMAL SLICE PART

// set initialState of movieslice
const initialState = {
  movies: {},
  shows: {},
};

// create movieslice
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // add actions inside of reducers
    addMovies: (state, { payload }) => {
      // Whenever I get the movies from the payload, I need to update the state of my movies
      state.movies = payload;

      // {...state, ...payload} //Old way we get the initial state and returm the new
    },
  },
  // extraReducers: {} //common method which you want to invoke but you have different type of actions
  //   this [fetchAsyncMovies] will have some additional action creator and this action creator will define a lifecycle of Async request
  // so we see all async action creator which define lifecycle
  extraReducers: {
    //   If api is pending then this reducer will run
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },

    //   If api is fulfilled then this reducer will run
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      // first we return the initial state  and assign the payload to the movies
      return { ...state, movies: payload };
    },

    //  If api is rejected then this reducer will run
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },

    // Just for Shows
    //   If api is fulfilled then this reducer will run
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      // first we return the initial state  and assign the payload to the movies
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
// if I want to get a value from store
export const getAllMovies = (state) => state.movies.movies; // state.nameofreducer.propertyname
export const getAllShows = (state) => state.movies.shows; // state.nameofreducer.propertyname

export default movieSlice.reducer;
