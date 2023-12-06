import styles from './index.module.scss';
import { FC } from 'react';
import { useDataFetching } from '../../api/hooks/useMoviesFetching';
import { useNavigate } from 'react-router-dom';
type Props = {
  apiUrl: string;
  title: string;
  isLargeRow?: boolean;
};

export const MovieList: FC<Props> = ({ apiUrl, title, isLargeRow = false }) => {
  const navigate = useNavigate();
  const { movies, isLoading, isError } = useDataFetching(apiUrl);

  if (isLoading) {
    return <p>ロード中</p>;
  }
  if (isError) {
    return <p>エラーが発生しました</p>;
  }

  return (
    <div className={styles.Row}>
      <h2>{title}</h2>
      <p onClick={() => navigate('/Home/genres')}>ジャンル一覧</p>
      <div className={styles.RowPosters}>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <img
              key={movie.id}
              className={`${styles.RowPoster} ${
                isLargeRow ? styles.RowPosterLarge : ''
              }`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt='現在は表示できません'
              onClick={() =>
                navigate(`/Home/detail/${movie.id}`, {
                  state: { apiUrl: apiUrl },
                })
              }
            />
          ))
        ) : (
          <p>現在はありません。</p>
        )}
      </div>
    </div>
  );
};
