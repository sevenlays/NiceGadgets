import React from 'react';
import { SliderButton } from '../../UI';
import { ItemsSlider } from '../../components';

import styles from './SliderSection.module.scss';

interface SliderSectionProps {
  title: string;
  prevButtonClass: string;
  nextButtonClass: string;
}

export const SliderSection: React.FC<SliderSectionProps> = ({
  title,
  prevButtonClass,
  nextButtonClass,
}) => (
  <section className={styles['slider-section']}>
    <div className={styles.container}>
      <div className={styles['title-and-buttons']}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.buttons}>
          <SliderButton direction="prev" className={prevButtonClass} />
          <SliderButton direction="next" className={nextButtonClass} />
        </div>
      </div>
    </div>
    <ItemsSlider
      prevButtonClass={prevButtonClass}
      nextButtonClass={nextButtonClass}
    />
  </section>
);
