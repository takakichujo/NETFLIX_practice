import { FC } from 'react';
// import { Nav } from '../../components/Nav/index';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
export const Mypage: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={`${styles.mypageContent}`}>
        <div className={`${styles.Top}`}>
          <h1 className={`${styles.TopAccount}`}>アカウント</h1>
          <p className={`${styles.TopRegister}`}>
            メンバー登録年月日：2023年11月29日
          </p>
        </div>
        <div className={`${styles.Membership}`}>
          <p className={`${styles.MembershipTopText}`}>
            メンバーシップとお支払い
          </p>
          <div>
            <p className={`${styles.MembershipContent}`}>
              メールアドレス: aaaaaaaaaa@.com
            </p>
            <p className={`${styles.MembershipContent}`}>
              電話番号:000-0000-0000
            </p>
            <p className={`${styles.MembershipContent}`}>名前:user</p>
          </div>
        </div>
        <div className={`${styles.Membership}`}>
          <p className={`${styles.MembershipTopText}`}>プランの詳細情報</p>
          <p className={`${styles.MembershipContent}`}>スタンダード</p>
        </div>
        <div className={`${styles.Membership}`}>
          <p className={`${styles.MembershipTopText}`}>
            セキュリティとプライバシー
          </p>
          <div>
            <p className={`${styles.MembershipContent}`}>
              このアカウントに最近アクセスしたデバイスの確認や<br></br>
              アカウントへのアクセスの管理等を行います
            </p>
          </div>
        </div>
        <div className={styles.Membership}>
          <p
            className={styles.MembershipLogout}
            onClick={() => {
              navigate('/Login');
            }}
          >
            ログアウト
          </p>
        </div>
      </div>
    </div>
  );
};
