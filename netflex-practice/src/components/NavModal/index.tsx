import { FC } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
type NavModalProps = {
  onClick: () => void;
};
export const NavModal: FC<NavModalProps> = ({ onClick }) => {
  const navigate = useNavigate();
  const handleMypageClick = () => {
    onClick();
  };
  const handleLogoutClick = () => {
    navigate('/Login');
  };
  return (
    <div className={styles.modalContent}>
      <p className='modalText' onClick={handleMypageClick}>
        アカウント情報
      </p>
      <p className='modalText' onClick={handleLogoutClick}>
        ログアウト
      </p>
    </div>
  );
};
