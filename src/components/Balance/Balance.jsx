import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { totalPriceSelector } from '../../selectors';
import styles from './Balance.module.css';

class Balance extends PureComponent {
  render() {
    const { totalPrice } = this.props;
    // old way without reselect
    // const { totalPrice, currencies } = this.props;
    // let totalGrow = 0;
    // currencies.map(cur => {
    //   return (totalGrow += cur.grow);
    // });
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Your total Balance</div>
        <div className={styles.balance}>
          <span className={styles.dollar}>$</span>
          {totalPrice.toFixed(2)}
        </div>
        <div className={styles.subtitle}>24h Changes</div>
        {totalPrice >= 0 ? (
          <div className={styles.grow_green}>
            + ${totalPrice.toFixed(2)} &#8593;
          </div>
        ) : (
          <div className={styles.grow_red}>
            - ${totalPrice.toFixed(2)} &#8595;
          </div>
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

export default connect(mapStateToProps)(Balance);
