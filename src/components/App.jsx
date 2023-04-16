import React from 'react';
import Counter from './Counter/Counter'; // підключення секції Counter
import css from "./Section/Section.module.css";// підключення стилів на картку




const state = {
  good: 0,
  neutral: 0,
  bad: 0
}

// РЕНДНЕРІНГ сторінки
export const App = () => {
  return (
     <div className={css.container}>
        <div className={css.section}>
        <h1 className={css.section_title}>Please leave feedback</h1>
        <Counter />
        </div>

     </div>
  );
};