import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StatisticPage from '../pages/statistic-page/statistic-page';
import NotFoundPage from '../pages/not-found-page/not-found';
import {fetchData} from '../../store/data/data-slice';
import {ROUTES} from '../../const';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.statistic} element={<StatisticPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
