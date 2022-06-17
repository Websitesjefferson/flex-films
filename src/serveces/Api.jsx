import axios from 'axios';

// BASE DA URL // https://api.themoviedb.org/3/
// URLDA API // https://api.themoviedb.org/3/movie/now_playing?api_key=1f986a550f568f4b00d057a1fb31f754



const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
export default Api