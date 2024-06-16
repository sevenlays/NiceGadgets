import style from './EmptySearch.module.scss';
import EmptySearchCat from '../../../assets/Search_not_found.png';

export const EmptySearch = () => {
  return <img src={EmptySearchCat} alt="123" className={style.emptySearch} />;
};
