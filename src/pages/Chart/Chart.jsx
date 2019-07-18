import React, { Component } from 'react';
import styles from './Chart.module.css';
import { connect } from 'react-redux';
import { fetchDayHistory } from '../../actions';

import ChartHeader from '../../components/ChartHeader/ChartHeader';
import ChartGraph from '../../components/ChartGraph/ChartGraph';
import MiniCard from '../../components/MiniCard/MiniCard';

class Chart extends Component {
  forceFetchHandle = () => {
    const {
      fetchDayHistory,
      params: { id },
    } = this.props;
    const urlType = id.toUpperCase();
    fetchDayHistory(urlType);
  };

  render() {
    const { currencies, routeParams, curPrice, params } = this.props;
    const curr = currencies.filter(currency => {
      return currency.type === routeParams.id;
    })[0];
    const currAmount = curPrice && (curr.amount * curPrice.USD).toFixed(2);

    return (
      <div className={styles.wrapper}>
        <ChartHeader />
        <div className={styles.swiper}>
          {currencies.map((currency, index) => {
            return (
              <MiniCard
                {...currency}
                key={index}
                idx={index}
                {...params}
                onClick={this.forceFetchHandle()}
              />
            );
          })}
        </div>
        {renderChartInfo(curr, currAmount)}
        <ChartGraph />
      </div>
    );
  }
}

const renderChartInfo = (curr, currAmount) => {
  return (
    <div className={styles.chart_header}>
      <div className={styles.card_icon}>
        <span className={`icon icon-${curr.type} ${styles.icon_img}`} />
        <span className={styles.card_type_wrapper}>
          <div className={styles.card_type}>{curr.type}</div>
          <div className={styles.card_name}>{curr.name}</div>
        </span>
      </div>
      <div className={styles.card_amount}>
        <div className={styles.amount_sum}>{curr.amount}</div>
        <div className={styles.amount_cur}>{currAmount}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    curPrice: state.prices.types[ownProps.location.query.i],
  };
};

const mapDispatchToProps = {
  fetchDayHistory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);
