import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StatisticPage from '../pages/statistic/statistic-page';
import NotFoundPage from '../pages/not-found/not-found';
import {ROUTES} from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.statistic} element={<StatisticPage />} />
        <Route path="*" element={< NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
