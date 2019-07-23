import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrice } from '../actions';

class CardContainer extends Component {
  componentDidMount() {
    const { fetchPrice, routing, type } = this.props;
    // Запретим фетчить данные при переходе по ссылке, чтобы сумма повтороно не считалась
    const fetchType = type.toUpperCase();
    routing.action === 'POP' &&
      routing.pathname === '/' &&
      fetchPrice(fetchType);
  }

  render() {
    const { curPrice, amount } = this.props;
    const currAmount = curPrice && (amount * curPrice.USD).toFixed(2);
    if (curPrice) {
      return this.props.children({ ...this.props, currAmount });
    } else return null;
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
)(CardContainer);
