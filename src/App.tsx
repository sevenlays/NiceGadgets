import { useState } from 'react';
import './App.scss';
import { Test } from './components/test/Test';
import { Header } from './components/HeaderComponents/Header/Header';
import { Footer } from './components/FooterComponents/Footer/Footer';
import { MobileMenu } from './components/MenuComponents/MobileMenu/MobileMenu';

export const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(3);

  const increment = () => {
    setCount(prev => prev + value);
  };

  const decrement = () => {
    setCount(prev => prev - value);
  };

  return (
    <div className="App">
      <Header />
      <Test />
      <h1>Product Catalog</h1>
      <h2>{count}</h2>
      <input
        type="number"
        min={1}
        max={100}
        value={value}
        onChange={e => setValue(+e.target.value)}
      />
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      <Footer />

      <MobileMenu />
    </div>
  );
};
