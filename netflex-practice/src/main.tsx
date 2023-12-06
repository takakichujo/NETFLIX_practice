import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Mypage } from './Route/mypage/index.tsx';
import { NotFound } from './components/NotFound/index.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Detail } from './Route/detail/index.tsx';
import { Genres } from './Route/genres/index.tsx';
import { Login } from './Route/Login/index.tsx';
import { Layout } from './Route/Layout/index.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Home' element={<Layout />}>
          <Route path='/Home' element={<App />} />
          <Route path='/Home/mypage' element={<Mypage />} />
          <Route path='/Home/detail/:id' element={<Detail />} />
          <Route path='/Home/Genres' element={<Genres />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
