import { FC } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
export const NavModal: FC = () => {
  const navigate = useNavigate();
  const handleMypageClick = () => {
    navigate('/Home/mypage');
  };
  const handleLogoutClick = () => {
    navigate('/Login');
  };
  return (
    <div className={`${styles.modalContent}`}>
      <p className='modalText' onClick={handleMypageClick}>
        アカウント情報
      </p>
      <p className='modalText' onClick={handleLogoutClick}>
        ログアウト
      </p>
    </div>
  );
};
