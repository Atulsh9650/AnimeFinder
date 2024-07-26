import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import Loader from './components/Loader.tsx';

const Home=lazy(()=>import('./pages/Home.tsx'));



const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App