import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../../header/header';
import Statistic from '../../statistic/statistic';
import Loader from '../../loader/loader';

const StatisticPage = () => {
  const isLoading = useSelector((state) => state.data.isLoading);
  const isError = useSelector((state) => state.data.isError);
  const errMessage = useSelector((state) => state.data.errorMessage)

  return (
    <div className="page">
      <Header />
      <main className="page__main-section container">
        <h1 className="page__title">Статистика</h1>
        {isLoading ? <Loader /> : isError ? <p className="page__message">{errMessage}</p> : <Statistic />}
      </main>
    </div >
  );
};

export default StatisticPage;
