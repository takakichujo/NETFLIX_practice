import { FC } from 'react';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { NavModal } from '../NavModal';
import { useNavigate } from 'react-router-dom';

export const Nav: FC = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const handleModal = () => {
    setIsModal((prevOnModal) => !prevOnModal);
  };
  const handleMypage = () => {
    if (isModal) navigate('/Home/Mypage');
    setIsModal(false);
  };
  const homeHandle = () => {
    navigate('/Home');
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow((prevShow) => !prevShow);
      } else {
        setShow((prevShow) => !prevShow);
      }
    };
    window.addEventListener('scroll', handleShow);
    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  }, [show]);
  return (
    <div className={`${styles.nav} ${show && styles.navBlack}`}>
      <img
        className={styles.navLogo}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
        onClick={homeHandle}
      />
      <p className={styles.navMypage}>こんにちはuserさん</p>
      <img
        className={styles.navAvater}
        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
        alt='Avatar'
        onClick={handleModal}
      />
      {isModal && <NavModal onClick={handleMypage} />}
    </div>
  );
};
