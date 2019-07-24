import React, { Component } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router';

class Card extends Component {
  // getDerivedStateFromProps practice
  // state = {
  //   newPrice: null,
  // };
  // static getDerivedStateFromProps(props, state) {
  //   console.log(props.curPrice);
  //   return { newPrice: props.curPrice };
  // }

  render() {
    const {
      curPrice,
      amount,
      type,
      name,
      grow,
      idx,
      currAmount,
      theme,
    } = this.props;
    return (
      <div className={styles[`${theme.name}_card`]}>
        <Link to={`/charts/${type}?i=${idx}`} className={styles.link}>
          <div className={styles.card_block}>
            <div className={styles.card_icon}>
              <span className={`icon icon-${type} ${styles.icon_img}`} />
              <span className={styles.card_type_wrapper}>
                <div className={styles.card_type}>{type}</div>
                <div className={styles.card_name}>{name}</div>
              </span>
            </div>
            <div className={styles.card_amount}>
              <div className={styles.amount_sum}>{amount}</div>
              <div className={styles.amount_cur}>{currAmount}</div>
            </div>
          </div>
          <div className={styles.card_block}>
            <div className={styles.card_price}>
              {curPrice && <div>{curPrice.USD}</div>}
              <div className={styles.card_title}>Price</div>
            </div>
            <div className={styles.card_grow}>
              {grow >= 0 ? (
                <div className={styles.grow_green}>+{grow}%</div>
              ) : (
                <div className={styles.grow_red}>-{grow}%</div>
              )}
              <div className={styles.grow_title}>Profit/Loss</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
