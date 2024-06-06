import { Button } from '../../../UI';
import icon from '../../../assets/icons/Close.svg';
import styles from './CloseIcon.module.scss';

type Props = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CloseIcon: React.FC<Props> = ({ setShowMenu }) => (
  <div className={styles.icon}>
    <Button
      type="icon"
      onClick={() => setShowMenu(false)}
      size={{ width: 50, height: 50 }}
    >
      <img src={icon} alt="Icon" />
    </Button>
  </div>
);
