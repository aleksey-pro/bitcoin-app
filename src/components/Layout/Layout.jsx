import React, { PureComponent } from 'react';
import styles from './Layout.module.css';

const Theme = React.createContext({ name: 'dark', themeToggle: () => {} });

class Layout extends PureComponent {
  static Consumer = Theme.Consumer;
  state = {
    theme: 'dark',
  };

  themeToggler = () =>
    this.state.theme === 'dark'
      ? this.setState({ theme: 'gray' })
      : this.setState({ theme: 'dark' });

  render() {
    return (
      <Theme.Provider
        value={{ name: this.state.theme, themeToggle: this.themeToggler }}
      >
        <div className={styles.wrapper}>{this.props.children}</div>
      </Theme.Provider>
    );
  }
}

export default Layout;
