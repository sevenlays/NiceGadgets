import { AppRouter } from './router';

import { Test } from './components/test/Test';

import './App.scss';
import { Test } from './components/test/Test';
import { Header } from './components/HeaderComponents/Header/Header';
import { Footer } from './components/FooterComponents/Footer/Footer';
import { MobileMenu } from './components/MenuComponents/MobileMenu/MobileMenu';

export const App = () => {
  return (
    <div className="App">
      <AppRouter />

      <Test />
    </div>
  );
};
