import React, { Component } from 'react';

import styles from './Main.module.css';

import Card from '../../components/Card/Card';
import Balance from '../../components/Balance/Balance';
import MainHeader from '../../components/MainHeader/MainHeader';

export default class Main extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.wrapper}>
        <MainHeader />
        <Balance currencies={data.currencies} />
        <div className={styles.cards}>
          {data.currencies.map((currency, index) => (
            <Card key={index} idx={index} currency={currency} />
          ))}
        </div>
      </div>
    );
  }
}
