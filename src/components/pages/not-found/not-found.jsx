import React from 'react';
import Header from '../../header/header';
import {MESSAGES} from '../../../const';

const NotFoundPage = () => {
  return (
    <div className="page">
      <Header />
      <main className="page__main-section container">
        <h1 className="page__title page__title--not-found">{MESSAGES.noPage}</h1>
      </main>
    </div >
  );
};

export default NotFoundPage;
