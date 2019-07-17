import React from 'react';

const withGrow = BaseComponent => {
  return class withGrow extends React.PureComponent {
    constructor(props) {
      super(props);
      let totalGrow = 0;
      this.totalGrow = totalGrow;
    }
    render() {
      const { currencies } = this.props;
      currencies.map(cur => {
        return (this.totalGrow += cur.grow);
      });
      return (
        <BaseComponent {...this.props} totalGrow={this.totalGrow.toFixed(2)} />
      );
    }
  };
};

export default withGrow;
