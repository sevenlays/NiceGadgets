import { AppRouter } from './router';

import { Test } from './components/test/Test';

import './App.scss';

import { HomeSlider } from './components/HomeSlider/HomeSlider';
// import { VariableWidth } from './components/SliderItems/SliderItems';

export const App = () => {
  return (
    <div className="App">
      <AppRouter />

      <Test />
      <HomeSlider />

      <div>1</div>

      <div>2</div>

      <div>3</div>
      <div>4</div>

      {/* <VariableWidth /> */}
    </div>
  );
};
