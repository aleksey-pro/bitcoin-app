import React, { Component } from 'react';

import styles from './Main.module.css';

import Card from '../../components/Card/Card';
import CardContainer from '../../component-containers/CardContainer';
import Balance from '../../components/Balance/Balance';
import MainHeader from '../../components/MainHeader/MainHeader';

export default class Main extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <div className={styles.wrapper}>
        <MainHeader />
        <Balance currencies={currencies} />
        <div className={styles.cards}>
          {currencies.map((currency, index) => (
            <CardContainer key={index} idx={index} {...currency}>
              {props => <Card {...props} />}
            </CardContainer>
          ))}
        </div>
      </div>
    );
  }
}
