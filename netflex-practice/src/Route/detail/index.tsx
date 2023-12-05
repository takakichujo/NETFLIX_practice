import { FC } from 'react';
import { useMovieFetching } from '../../api/hooks/useMovieFetching';
import { useParams } from 'react-router-dom';
import { Trailer } from '../../api/hooks/useTrailerFetching';
import YouTube from 'react-youtube';
import styles from './index.module.scss';
export const Detail: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useMovieFetching(String(id));
  const {
    data: trailerData,
    isLoading: trailerLoading,
    isError: trailerError,
  } = Trailer(String(id));
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  if (isError) {
    return <p>エラーが発生しました</p>;
  }
  if (isLoading) {
    return <p>ロード中</p>;
  }
  return (
    <div>
      {data ? (
        <>
          <h1>{data.original_name}</h1>
          <p className={styles.firstDate}>{`公開日：${data.first_air_date}`}</p>
          <p className={styles.detail}>詳細</p>
          <p className={styles.overview}>{data?.overview}</p>

          <p className={styles.genreTop}>ジャンル</p>
          <div className={styles.genre}>
            {data?.genres.map((genre) => (
              <p key={genre.id} className={styles.genreContent}>
                {genre.name}
              </p>
            ))}
          </div>
          <a href={data.homepage} className={styles.genreHomepage}>
            ホームページ
          </a>
        </>
      ) : null}
      {trailerLoading && <p>トレイラーローディング</p>}
      {trailerError && <p>トレイラーエラー</p>}
      <YouTube videoId={trailerData?.[0]?.key} opts={opts} />
    </div>
  );
};
