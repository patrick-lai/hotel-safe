import React from 'react';
import Numpad from '../components/Numpad';
import Screen from '../components/Screen';
import Indicator from '../components/Indicator';

import styles from './styles.css';

export default () => (
  <div className="app">
    <div className="container">
      <div>
        <Numpad />
      </div>
      <div>
        <Screen />
        <div className="indicator-container">
          <Indicator />
        </div>
      </div>
    </div>
  </div>
);
