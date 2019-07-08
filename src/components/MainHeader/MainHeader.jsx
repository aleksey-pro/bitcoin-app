import React from 'react';
import styles from './MainHeader.module.css';

import Header from '../Header/Header';

import { ReactComponent as Search } from './magnifying-glass.svg';
import { ReactComponent as Notify } from './notification.svg';

const MainHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Header>
        <input className={styles.input} type="text" />
        <Search className={styles.search} width="20px" height="20px" />
        <Notify className={styles.notify} width="20px" height="20px" />
      </Header>
    </div>
  );
};

export default MainHeader;
