import { useState, useEffect } from 'react';
import i18n from '../../../providers/i18n/i18n';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language).then(() => {
      localStorage.setItem('language', language);
      setCurrentLanguage(language);
    });
  };

  return (
    <ul className={styles['language-list']}>
      <li>
        <button
          className={`${styles.button} ${currentLanguage === 'ua' ? styles.active : ''}`}
          onClick={() => handleLanguageChange('ua')}
        >
          UA
        </button>
      </li>
      <li>
        <button
          className={`${styles.button} ${currentLanguage === 'en' ? styles.active : ''}`}
          onClick={() => handleLanguageChange('en')}
        >
          ENG
        </button>
      </li>
      <li>
        <button
          className={`${styles.button} ${currentLanguage === 'ch' ? styles.active : ''}`}
          onClick={() => handleLanguageChange('ch')}
        >
          中文
        </button>
      </li>
    </ul>
  );
};
