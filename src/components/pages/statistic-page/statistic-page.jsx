import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setStatisticGridView, setFlightFilter, setDateMinFilter, setDateMaxFilter} from '../../../store/view/view-slice';
import Header from '../../header/header';
import Statistic from '../../statistic/statistic';
import Loader from '../../loader/loader';

const StatisticPage = () => {
  const dispatch = useDispatch();

  const [isGridView, setIsGridView] = useState(useSelector((state) => state.view.isStatisticGridView));
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 890 ? true : false,
  });

  const isLoading = useSelector((state) => state.data.isLoading);
  const isError = useSelector((state) => state.data.isError);
  const errMessage = useSelector((state) => state.data.errorMessage);

  const setViewByButton = () => {
    if (mQuery.matches) {
      dispatch(setStatisticGridView(!isGridView));
      setIsGridView(!isGridView);
    }
  };

  const setView = (evt) => {
    setMQuery(evt);

    if (!evt.matches) {
      setIsGridView(false);
      dispatch(setStatisticGridView(false));
    }
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 891px)");
    mediaQuery.addEventListener(`change`, setView);

    return () => mediaQuery.removeEventListener(`change`, setView);
  });

  useEffect(() => {
    return () => {
      dispatch(setDateMinFilter(``));
      dispatch(setDateMaxFilter(``));
      dispatch(setFlightFilter(``));
    };
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main-section container">
        <div className="page__title-wrapper">
          <h1 className="page__title">Статистика</h1>
          <div className="page__btn-wrapper">
            <button className="page__btn" type="button" disabled={!isGridView} onClick={setViewByButton} aria-label="Отображать полосой">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <path d="M5.96,20.63H2.6c-0.63,0-1.14-0.51-1.14-1.14v-8.98c0-0.63,0.51-1.14,1.14-1.14h3.36 c0.63,0,1.14,0.51,1.14,1.14v8.98C7.1,20.12,6.59,20.63,5.96,20.63z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M13.11,20.63H9.74c-0.63,0-1.14-0.51-1.14-1.14v-8.98c0-0.63,0.51-1.14,1.14-1.14h3.36 c0.63,0,1.14,0.51,1.14,1.14v8.98C14.24,20.12,13.73,20.63,13.11,20.63z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M20.26,20.63h-3.36c-0.63,0-1.14-0.51-1.14-1.14v-8.98c0-0.63,0.51-1.14,1.14-1.14h3.36 c0.63,0,1.14,0.51,1.14,1.14v8.98C21.39,20.12,20.88,20.63,20.26,20.63z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M27.4,20.63h-3.36c-0.63,0-1.14-0.51-1.14-1.14v-8.98c0-0.63,0.51-1.14,1.14-1.14h3.36 c0.63,0,1.14,0.51,1.14,1.14v8.98C28.54,20.12,28.03,20.63,27.4,20.63z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
              </svg>
            </button>
            <button className="page__btn" type="button" disabled={isGridView} onClick={setViewByButton} aria-label="Отображать плиткой">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
                <path d="M8.48,9.63H2.79c-0.63,0-1.14-0.51-1.14-1.14V2.73c0-0.63,0.51-1.14,1.14-1.14h5.69c0.63,0,1.14,0.51,1.14,1.14 v5.76C9.62,9.12,9.11,9.63,8.48,9.63z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M17.84,9.63h-5.69c-0.63,0-1.14-0.51-1.14-1.14V2.73c0-0.63,0.51-1.14,1.14-1.14h5.69 c0.63,0,1.14,0.51,1.14,1.14v5.76C18.98,9.12,18.47,9.63,17.84,9.63z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M27.21,9.63h-5.69c-0.63,0-1.14-0.51-1.14-1.14V2.73c0-0.63,0.51-1.14,1.14-1.14h5.69 c0.63,0,1.14,0.51,1.14,1.14v5.76C28.34,9.12,27.83,9.63,27.21,9.63z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M8.48,19.03H2.79c-0.63,0-1.14-0.51-1.14-1.14v-5.76c0-0.63,0.51-1.14,1.14-1.14h5.69 c0.63,0,1.14,0.51,1.14,1.14v5.76C9.62,18.52,9.11,19.03,8.48,19.03z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M8.48,28.43H2.79c-0.63,0-1.14-0.51-1.14-1.14v-5.76c0-0.63,0.51-1.14,1.14-1.14h5.69 c0.63,0,1.14,0.51,1.14,1.14v5.76C9.62,27.92,9.11,28.43,8.48,28.43z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M17.84,19.03h-5.69c-0.63,0-1.14-0.51-1.14-1.14v-5.76c0-0.63,0.51-1.14,1.14-1.14h5.69 c0.63,0,1.14,0.51,1.14,1.14v5.76C18.98,18.52,18.47,19.03,17.84,19.03z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M17.84,28.43h-5.69c-0.63,0-1.14-0.51-1.14-1.14v-5.76c0-0.63,0.51-1.14,1.14-1.14h5.69 c0.63,0,1.14,0.51,1.14,1.14v5.76C18.98,27.92,18.47,28.43,17.84,28.43z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
                <path d="M27.21,19.03h-5.69c-0.63,0-1.14-0.51-1.14-1.14v-5.76c0-0.63,0.51-1.14,1.14-1.14h5.69 c0.63,0,1.14,0.51,1.14,1.14v5.76C28.34,18.52,27.83,19.03,27.21,19.03z" fill="none" stroke="currentColor" strokeWidth="0.75" strokeMiterlimit="10" />
              </svg>
            </button>
          </div>
        </div>
        {isLoading ? <Loader /> : isError ? <p className="page__message">{errMessage}</p> : <Statistic />}
      </main>
    </div >
  );
};

export default StatisticPage;
