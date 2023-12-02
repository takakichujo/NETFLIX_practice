import { FC } from 'react';
import { useGenresFetching } from '../../api/hooks/useGenresFetching';
import styles from './style.module.scss';
export const Genres: FC = () => {
  const { data, isLoading, isError } = useGenresFetching();
  if (isLoading) {
    return <p>ロード中</p>;
  }
  if (isError) {
    return <p>エラーが発生しました</p>;
  }
  return (
    <div>
      <h1>ジャンル一覧</h1>
      <div className={styles.genreTop}>
        {data?.map((genre) => (
          <p key={genre.id} className={styles.genreContent}>
            {genre.name}
          </p>
        ))}
      </div>
    </div>
  );
};
