import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../../store/data/data-slice';
import Header from '../../header/header';
import Statistic from '../../statistic/statistic';
import {MESSAGES} from '../../../const';

const StatisticPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.data.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main-section container">
        <h1 className="page__title">Статистика</h1>
        {isLoading ? <p>{MESSAGES.loading}</p> : <Statistic />}
      </main>
    </div >
  );
};

export default StatisticPage;
