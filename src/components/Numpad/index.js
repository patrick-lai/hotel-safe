import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

// TODO - Use a font... like icomoon
const _RIGHT_ARROW = '⇨';

// Define our grid of buttons , a mix of numbers and actions
const listOfButtons = [1, 2, 3, 4, 5, 6, 7, 8, 'CLR', 9, _RIGHT_ARROW];

const Button = ({ action }) => <button className={styles.btn}>{action}</button>;

export default () => (
  <div className={styles.numpad}>
    {listOfButtons.map((action, i) => <Button action={action} key={i} />)}
  </div>
);
