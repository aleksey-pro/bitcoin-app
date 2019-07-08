import React, { Component } from 'react';
import styles from './ChartGraph.module.css';
import { fetchDayHistory } from '../../actions';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
// import { format } from 'date-fns';
import { connect } from 'react-redux';

// const formatXAxis = tickItem => {
//   return format(new Date(tickItem), 'DD:MM');
// };

const formatYAxis = tickItem => {
  return Number((tickItem / 1000).toFixed(1)) + 'k';
};

class ChartGraph extends Component {
  render() {
    const { daysHistory } = this.props;
    return (
      <div className={styles.wrapper}>
        <AreaChart
          width={320}
          height={400}
          data={daysHistory}
          horizontal={false}
        >
          <CartesianGrid stroke="#ccc" vertical={false} strokeDasharray="3 3" />
          <XAxis tick={false} padding={{ left: -50 }} />
          <YAxis tickFormatter={formatYAxis} />
          <Area type="linear" dataKey="open" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  daysHistory:
    state.daysHistory.daysHistory && state.daysHistory.daysHistory.Data,
});

const mapDispatchToProps = {
  fetchDayHistory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartGraph);
