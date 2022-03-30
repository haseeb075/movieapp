import axios from "axios";

export default axios.create({url: "items" , baseURL: 'http://www.omdbapi.com/'})