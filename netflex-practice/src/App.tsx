import './App.css';
import { requests } from './api/request';
import { MovieList } from './components/MovieList';
import { Banner } from './components/Banner';
import { movieListContents } from './lib/const/movieListContent';
const App = () => {
  return (
    <div>
      <Banner apiUrl={requests.feachNetflixOriginals} />
      {movieListContents.map((movie) => (
        <MovieList
          key={movie.title}
          title={movie.title}
          apiUrl={movie.apiUrl}
          isLargeRow={movie.isLargeRow}
        />
      ))}
    </div>
  );
};

export default App;
