/***
 * A numpad in grid style
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './styles.css';

// Define our grid of buttons , a mix of numbers and actions
const defaultButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'CLR', 0, '⇨'];

const Numpad = ({ buttons = defaultButtons, onPress }) => (
  <div className="numpad">
    {buttons.map((action, i) => (
      <Button label={action} value={action} onPress={onPress} key={i} />
    ))}
  </div>
);

Numpad.propTypes = {
  buttons: PropTypes.array,
  onPress: PropTypes.func
};

export default Numpad;
