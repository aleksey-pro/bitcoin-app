import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Balance.module.css';

class Balance extends Component {
  render() {
    const { totalPrice, currencies } = this.props;
    let totalGrow = 0;
    currencies.map(cur => {
      return (totalGrow += cur.grow);
    });
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>Your total Balance</div>
        <div className={styles.balance}>
          <span className={styles.dollar}>$</span>
          {totalPrice}
        </div>
        <div className={styles.subtitle}>24h Changes</div>
        {totalGrow >= 0 ? (
          <div className={styles.grow_green}>
            + ${totalGrow.toFixed(2)} &#8593;
          </div>
        ) : (
          <div className={styles.grow_red}>
            - ${totalGrow.toFixed(2)} &#8595;
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalPrice: state.total.price.toFixed(2),
});

export default connect(mapStateToProps)(Balance);
