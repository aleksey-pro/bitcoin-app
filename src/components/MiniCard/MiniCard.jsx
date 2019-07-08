import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './MiniCard.module.css';

const MiniCard = ({ currency, curPrice, params: { id }, idx }) => {
  const currAmount = curPrice && (currency.amount * curPrice.USD).toFixed(2);
  return (
    <Link to={`/charts/${currency.type}?i=${idx}`} className={styles.link}>
      <div
        className={
          currency.type === id ? styles.mini_card_active : styles.mini_card
        }
      >
        <div className={styles.card_icon}>
          <span className={`icon icon-${currency.type} ${styles.icon_img}`} />
          <span className={styles.card_type_wrapper}>
            <div className={styles.card_type}>{currency.type}</div>
            <div className={styles.card_name}>{currency.name}</div>
          </span>
        </div>
        <div className={styles.card_amount}>
          <div className={styles.amount_sum}>{currency.amount}</div>
          <div className={styles.amount_cur}>{currAmount}</div>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    curPrice: state.prices.types[ownProps.idx],
  };
};

export default connect(mapStateToProps)(MiniCard);
