import React from 'react';
import styles from './spinner.styles.scss';

export const Spinner: React.FC = () => {
  return (
    <div className={styles.spinner}>
      {[...Array(12)].map((_, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};
