import styles from './index.module.scss';
import { FC } from 'react';
import { useDataFetching } from '../../api/hooks/useDataFetching';
import { useNavigate } from 'react-router-dom';
type MovieProps = {
  apiUrl: string;
  title: string;
  isLargeRow?: boolean;
};

export const MovieList: FC<MovieProps> = ({
  apiUrl,
  title,
  isLargeRow = false,
}) => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useDataFetching(apiUrl);
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
        {data && data.length > 0 ? (
          data.map((oneData) => (
            <img
              key={oneData.id}
              className={`${styles.RowPoster} ${
                isLargeRow ? styles.RowPosterLarge : ''
              }`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? oneData.poster_path : oneData.backdrop_path
              }`}
              alt='現在は表示できません'
              onClick={() =>
                navigate(`/Home/detail/${oneData.id}`, {
                  state: { apiUrl: apiUrl },
                })
              }
            ></img>
          ))
        ) : (
          <p>現在はありません。</p>
        )}
      </div>
    </div>
  );
};
