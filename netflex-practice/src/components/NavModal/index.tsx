import { FC } from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
type Props = {
  handleMypage: () => void;
};
export const NavModal: FC<Props> = ({ handleMypage }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/Login');
  };
  return (
    <div className={styles.modalContent}>
      <p className='modalText' onClick={handleMypage}>
        アカウント情報
      </p>
      <p className='modalText' onClick={handleLogoutClick}>
        ログアウト
      </p>
    </div>
  );
};
