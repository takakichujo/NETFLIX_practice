import { FC, ReactNode } from 'react';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { NavModal } from '../NavModal';
type Props = {
  className?: string;
  children?: ReactNode;
};

export const Nav: FC<Props> = (props: Props) => {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal((prevOnModal) => !prevOnModal);
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
    <div className={`${styles.Nav} ${show && styles.NavBlack}`}>
      <img
        className={`${styles.NavLogo}`}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />
      <p className={`${styles.Mypage}`}>{props.children}</p>
      <img
        className={`${styles.NavAvater}`}
        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
        alt='Avatar'
        onClick={handleModal}
      />
      {isModal && <NavModal />}
    </div>
  );
};
