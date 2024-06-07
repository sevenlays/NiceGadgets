import { Outlet } from 'react-router-dom';
import { Header } from '../../components/HeaderComponents/Header/Header';
import { Footer } from '../../components/FooterComponents/Footer/Footer';

export const RouteLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
