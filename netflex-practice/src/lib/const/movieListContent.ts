import requests from '../../api/request';
export const movieListContents = [
  { title: 'Top Rated', apiUrl: requests.feactTopRated, isLargeRow: true },
  {
    title: 'Acion Movies',
    apiUrl: requests.feactActionMovies,
    isLargeRow: false,
  },
  {
    title: 'Comedy Movies',
    apiUrl: requests.feactComedyMovies,
    isLargeRow: false,
  },
  {
    title: 'Horror Movies',
    apiUrl: requests.feactHorrorMovies,
    isLargeRow: false,
  },
  {
    title: 'Romance Movies',
    apiUrl: requests.feactRomanceMovies,
    isLargeRow: false,
  },
  {
    title: 'Documentraries',
    apiUrl: requests.feactDocumentMovies,
    isLargeRow: false,
  },
];
