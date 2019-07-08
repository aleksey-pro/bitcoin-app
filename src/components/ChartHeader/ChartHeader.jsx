import React from 'react';
import styles from './ChartHeader.module.css';
import { Link } from 'react-router';
import Header from '../Header/Header';

const ChartHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Header>
        <Link className={styles.link} to="/">
          &#8592;
        </Link>
      </Header>
    </div>
  );
};

export default ChartHeader;
