import React from 'react';
import Numpad from '../components/Numpad';
import Screen from '../components/Screen';
import styles from './styles.css';

export default () => (
  <div className="app">
    <div className="container">
      <div>
        <Numpad />
      </div>
      <div>
        <span>
          <Screen />
        </span>
        <span>indicator</span>
      </div>
    </div>
  </div>
);
