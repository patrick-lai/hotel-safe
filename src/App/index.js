import React from 'react';
import Numpad from '../components/Numpad';
import Screen from '../components/Screen';
import Indicator from '../components/Indicator';
import { dispatch } from '../store';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import styles from './styles.css';

// Dispatch action for when pressing key pad
export const onPress = value => {
  // Digit type input
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value)) {
    dispatch({ type: 'ENTER_DIGIT', digit: value });
    return;
  }

  // Special handlers
  switch (value) {
    case 'CLR':
      dispatch({ type: 'CLEAR_PIN' });
      break;
    case '⇨':
      dispatch({ type: 'SUBMIT_PIN' });
      break;
    default:
      throw Error(`Unhandled input type ${value}`);
  }
};

const App = ({ pin, locked, status }) => (
  <div className="app">
    <ToastContainer />
    <div className="container">
      <div>
        <Numpad onPress={onPress} />
      </div>
      <div className="right">
        <Screen display={status || pin.join('')} status={status} />
        <div className="indicator-container">
          <Indicator locked={locked} />
        </div>
      </div>
    </div>
  </div>
);

export default connect(state => ({
  pin: state.app.pin,
  status: state.app.status,
  locked: state.app.locked
}))(App);
