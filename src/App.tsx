import { AppRouter } from './router';

import { Test } from './components/test/Test';

import './App.scss';
import { Footer } from './components/FooterComponents/Footer/Footer';
import { Header } from './components/HeaderComponents/Header/Header';
import { MobileMenu } from './components/MenuComponents/MobileMenu/MobileMenu';

export const App = () => {
  return (
    <div className="App">
      <MobileMenu />
      <Header />
      <AppRouter />

      <Test />
      <Footer />
    </div>
  );
};
