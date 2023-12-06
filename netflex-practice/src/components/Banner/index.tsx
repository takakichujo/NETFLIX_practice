import { FC } from 'react';
import { useBannerFetching } from '../../api/hooks/useBannerFetch';
import { truncate } from '../../utils/helper';
import styles from './index.module.scss';
type BannerUrlProps = {
  apiUrl: string;
};
export const Banner: FC<BannerUrlProps> = ({ apiUrl }) => {
  const { data, isLoading, isError } = useBannerFetching(apiUrl);
  if (isLoading) {
    return <p>ロード中</p>;
  }
  if (isError) {
    return <p>エラーが発生しました</p>;
  }
  return (
    <header
      className={`${styles.Banner}`}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${data?.backdrop_path}")`,
      }}
    >
      {data ? (
        <div className={styles.BannerContent}>
          <h1 className={styles.BannerTitle}>
            {data.title || data.name || data.original_name}
          </h1>
          <div className={styles.BannerButtons}>
            <button className={styles.BannerButton}>Play</button>
            <button className={styles.BannerButton}>My List</button>
          </div>
          <h1 className={styles.BannerDescription}>
            {truncate(data.overview, 150)}
          </h1>
        </div>
      ) : null}
      <div className={styles.BannerFadeBottom}></div>
    </header>
  );
};
