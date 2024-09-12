import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import css from './App.module.css';
import Header from 'components/Header';
// import Header from 'components/pages/Header';



const Home = lazy(() => import('../pages/Home/Home'))
const BurgerMenu = lazy(() => import('components/Header/BurgerMenu/BurgerMenu'));
const Modal = lazy(() => import('components/Header/HeaderNav/Modal/Modal'));
// const Hero = lazy(() => import('components/Hero/Hero'));

function App() {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>

        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/menu' element={<BurgerMenu />} />
          <Route path='/price' element={<Modal />} />
          <Route path='/*' element={<Home />}></Route>
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
