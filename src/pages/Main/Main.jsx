import React, { Component } from 'react';

import styles from './Main.module.css';

import Card from '../../components/Card/Card';
import CardContainer from '../../component-containers/CardContainer';
import Balance from '../../components/Balance/Balance';
import MainHeader from '../../components/MainHeader/MainHeader';
import Layout from '../../components/Layout/Layout';

export default class Main extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <Layout.Consumer>
        {theme => (
          <div className={styles[`${theme.name}_wrapper`]}>
            <MainHeader theme={theme} />
            <Balance currencies={currencies} />
            <div className={styles.cards}>
              {currencies.map((currency, index) => (
                <CardContainer key={index} idx={index} {...currency}>
                  {props => <Card {...props} theme={theme} />}
                </CardContainer>
              ))}
            </div>
          </div>
        )}
      </Layout.Consumer>
    );
  }
}
