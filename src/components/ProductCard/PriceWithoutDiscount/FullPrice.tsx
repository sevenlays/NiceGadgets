import style from './FullPrice.module.scss';

type Props = {
  fullPrice: number;
};

export const FullPrice: React.FC<Props> = ({ fullPrice }) => {
  return <span className={style.withoutDiscount}>{`$${fullPrice}`}</span>;
};
