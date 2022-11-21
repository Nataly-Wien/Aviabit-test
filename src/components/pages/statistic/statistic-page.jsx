import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../../store/data-slice';
import Header from '../../header/header';
import {getFlightsYears} from '../../../common';


const StatisticPage = () => {
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.data.flights);
  console.log(myData, getFlightsYears(myData));

  useEffect(() => {
    dispatch(fetchData());

  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main-section container">
        <h1 className="page__title">Статистика</h1>
        {/* <Statistic /> */}
      </main>
    </div >
  );
};

export default StatisticPage;
