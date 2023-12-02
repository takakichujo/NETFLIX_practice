import { FC } from 'react';
import { useDataDetailFetching } from '../../api/hooks/useDataDetailFetching';
import { useParams } from 'react-router-dom';
import { Trailer } from '../../api/hooks/useTrailerFetching';
import YouTube from 'react-youtube';
import styles from './style.module.scss';
import { Nav } from '../../components/Nav/index';
export const Detail: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useDataDetailFetching(String(id));
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
      <Nav />
      <h1>{data && data.original_name}</h1>
      <p>{`公開日：${data?.first_air_date}`}</p>
      <p>詳細</p>
      <p>{data?.overview}</p>
      <div className={styles.genre}>
        {data?.genres.map((genre) => (
          <p
            key={genre.id}
            className={styles.genreContent}
          >{`genre:${genre.name}`}</p>
        ))}
      </div>
      <a href={data?.homepage}>ホームページ</a>
      {trailerLoading && <p>トレイラーローディング</p>}
      {trailerError && <p>トレイラーエラー</p>}
      <YouTube videoId={trailerData?.[0]?.key} opts={opts} />
    </div>
  );
};
