import { Button } from '../../../UI';
import { ReactComponent as Icon } from '../../../assets/icons/ArrowUp.svg';
import styles from './BackToTop.module.scss';
import { useTranslation } from 'react-i18next';

export const BackToTop = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.back}>
      <a href="#" className={styles.back__link}>
        {t('footer.backToTop')}
      </a>
      <Button type="icon" size={{ width: 32, height: 32 }}>
        <Icon className={styles.back__fill} />
      </Button>
    </div>
  );
};
