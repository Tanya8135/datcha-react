import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// import css from './App.module.css';
import Header from 'components/Header';



const Home = lazy(() => import('../pages/Home/Home'))

function App() {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/*' element={<Navigate to="/" />}></Route>
      </Routes>

    </div>
  );
}

export default App;
