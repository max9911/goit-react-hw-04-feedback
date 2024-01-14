import React from 'react';
import css from './section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h2 className={css.h2}>{title}</h2>
      {children}
    </div>
  );
};
