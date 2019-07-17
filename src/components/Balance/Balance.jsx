import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { totalPriceSelector } from '../../selectors';
import styles from './Balance.module.css';

import withGrow from '../../hoc/withGrow';

class Balance extends PureComponent {
  render() {
    const { totalPrice, totalGrow } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Your total Balance</div>
        <div className={styles.balance}>
          <span className={styles.dollar}>$</span>
          {totalPrice.toFixed(2)}
        </div>
        <div className={styles.subtitle}>24h Changes</div>
        {totalPrice >= 0 ? (
          <div className={styles.grow_green}>+ ${totalGrow} &#8593;</div>
        ) : (
          <div className={styles.grow_red}>- ${totalGrow} &#8595;</div>
        )}
      </div>
    );
  }
}

// old way without reselect
// const mapStateToProps = state => ({
//   totalPrice: state.total.price.toFixed(2),
// });

const mapStateToProps = state => ({
  totalPrice: totalPriceSelector(state),
});

export default withGrow(connect(mapStateToProps)(Balance));
