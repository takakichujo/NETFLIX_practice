import './App.css';
import { requests } from './api/request';
import { MovieList } from './components/MovieList';
import { Banner } from './components/Banner';
const App = () => {
  const movieListContents = [
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

  return (
    <div>
      <Banner apiUrl={requests.feachNetflixOriginals} />
      {movieListContents.map((h, index) => (
        <MovieList
          key={index}
          title={h.title}
          apiUrl={h.apiUrl}
          isLargeRow={h.isLargeRow}
        />
      ))}
    </div>
  );
};

export default App;
