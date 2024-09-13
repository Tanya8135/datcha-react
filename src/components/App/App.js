import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import Header from 'components/Header';
// import Loader from 'components/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const BurgerMenu = lazy(() => import('components/Header/BurgerMenu/BurgerMenu'));
const Modal = lazy(() => import('components/Header/HeaderNav/Modal/Modal'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Header /> */}

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
