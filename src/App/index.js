import React from 'react';
import Numpad from '../components/Numpad';
import styles from './styles.css';

export default () => (
  <div className="app">
    <div className="container">
      <div className="left">
        <Numpad />
      </div>
      <div className="right">
        <span>input</span>
        <span>indicator</span>
      </div>
    </div>
  </div>
);
