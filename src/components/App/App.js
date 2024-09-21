import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectLanguage } from '../../redux/selectors';

import Loader from 'components/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const BurgerMenu = lazy(() => import('components/Header/BurgerMenu/BurgerMenu'));
const Modal = lazy(() => import('components/Header/HeaderNav/Modal/Modal'));



function App() {
  const currentLanguage = useSelector(selectLanguage);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

  return (
    <div>
      <Suspense fallback={<div>Loading... <Loader /></div>}>

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
