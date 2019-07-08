import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Card.module.css';
import { Link } from 'react-router';
import { fetchPrice } from '../../actions';

class Card extends Component {
  componentDidMount() {
    const {
      fetchPrice,
      routing,
      currency: { type },
    } = this.props;
    // Запретим фетчить данные при переходе по ссылке, чтобы сумма повтороно не считалась
    const fetchType = type.toUpperCase();
    routing.action === 'POP' &&
      routing.pathname === '/' &&
      fetchPrice(fetchType);
  }

  render() {
    const { curPrice, currency, idx } = this.props;
    const currAmount = curPrice && (currency.amount * curPrice.USD).toFixed(2);
    return (
      <div className={styles.card}>
        <Link to={`/charts/${currency.type}?i=${idx}`} className={styles.link}>
          <div className={styles.card_block}>
            <div className={styles.card_icon}>
              <span
                className={`icon icon-${currency.type} ${styles.icon_img}`}
              />
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
          <div className={styles.card_block}>
            <div className={styles.card_price}>
              {curPrice && <div>{curPrice.USD}</div>}
              <div className={styles.card_title}>Price</div>
            </div>
            <div className={styles.card_grow}>
              {currency.grow >= 0 ? (
                <div className={styles.grow_green}>+{currency.grow}%</div>
              ) : (
                <div className={styles.grow_red}>-{currency.grow}%</div>
              )}
              <div className={styles.grow_title}>Profit/Loss</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    curPrice: state.prices.types[ownProps.idx],
    routing: state.routing.locationBeforeTransitions,
  };
};

const mapDispatchToProps = {
  fetchPrice,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
