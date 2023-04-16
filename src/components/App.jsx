import React from 'react';
import Counter from './Counter/Counter';
import css from "./Section/Section.module.css";




const state = {
  good: 0,
  neutral: 0,
  bad: 0
}

// РЕНДНЕРІНГ сторінки
export const App = () => {
  return (
     <div className={css.container}>
        <h1>Please leave feedback</h1>
        <Counter />
     </div>
  );
};