import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setStatisticGridView, setFilters} from '../../../store/view/view-slice';
import Header from '../../header/header';
import Statistic from '../../statistic/statistic';
import Loader from '../../loader/loader';
import SvgIcon from '../../svg-icon/svg-icon';
import {EMPTY_FILTERS} from '../../../const';

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
      dispatch(setFilters(EMPTY_FILTERS));
    };
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main-section">
        <div className="container">
          <div className="page__title-wrapper">
            <h1 className="page__title">Статистика</h1>
            <div className="page__btn-wrapper">
              <button className="page__btn" type="button" disabled={!isGridView} onClick={setViewByButton} aria-label="Отображать полосой">
                <SvgIcon name="band" width="30" height="30"/>
              </button>
              <button className="page__btn" type="button" disabled={isGridView} onClick={setViewByButton} aria-label="Отображать плиткой">
                <SvgIcon name="grid" width="30" height="30"/>
              </button>
              </div>
            </div>
          {isLoading ? <Loader /> : isError ? <p className="page__message">{errMessage}</p> : <Statistic />}
        </div>
      </main>
    </div >
  );
};

export default StatisticPage;
