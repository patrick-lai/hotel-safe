import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// TODO - Use a font... like icomoon
const _RIGHT_ARROW = '⇨';

// Define our grid of buttons , a mix of numbers and actions
const listOfButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'CLR', 0, _RIGHT_ARROW];

const Button = ({ action }) => <button className="btn">{action}</button>;

export default () => (
  <div className="numpad">
    {listOfButtons.map((action, i) => <Button action={action} key={i} />)}
  </div>
);
