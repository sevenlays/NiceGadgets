import { AppRouter } from './router';
import { useEffect } from 'react';

import './App.scss';
import { fetchProducts } from './redux';
import { useAppDispatch } from './hooks/useAppDispatch';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};
