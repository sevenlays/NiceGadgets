import { useNavigate } from 'react-router-dom';
import iconLeft from '../../assets/icons/ArrowLeftBold.svg';
import styles from './BackButton.module.scss';

export const BAckButton = () => {
  const navigate = useNavigate();

  return (
    <span className={styles.back} onClick={() => navigate(-1)}>
      <img src={iconLeft} /> <p style={{ marginTop: '1.55px' }}>Back</p>
    </span>
  );
};
