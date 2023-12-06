export const API_KEY = 'c9850fde87536ceecb4cdccbd9ec8fa8';
export const BASE_API = 'https://api.themoviedb.org/3';
export const requests = {
  feachTrending: `${BASE_API}/trending/all/week?api_key=${API_KEY}&language=en-us/1`,
  feachNetflixOriginals: `${BASE_API}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `${BASE_API}/discover/tv?api_key=${API_KEY}&language=en-us`,
  feactActionMovies: `${BASE_API}/discover/tv?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `${BASE_API}/discover/tv?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `${BASE_API}/discover/tv?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `${BASE_API}/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `${BASE_API}/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
