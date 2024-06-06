import { AppRouter } from './router';

import { Test } from './components/test/Test';

import './App.scss';
import { Footer } from './components/FooterComponents/Footer/Footer';
import { Header } from './components/HeaderComponents/Header/Header';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />

      <Test />
      <Footer />
    </div>
  );
};
