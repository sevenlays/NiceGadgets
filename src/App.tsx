import { AppRouter } from './router';
import { useEffect } from 'react';

import './App.scss';
import { fetchProducts, selectPhones, selectTheme } from './redux';
import { useSelector } from 'react-redux';
import { useAppDispatch } from './hooks/useAppDispatch';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const theme = useSelector(selectTheme);

  const phonesFromServer = useSelector(selectPhones);

  window.console.log(phonesFromServer);

  window.console.log(theme);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};
