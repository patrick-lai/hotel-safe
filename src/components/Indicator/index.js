/***
 * An indicator can can show status by color
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Indicator = ({ locked }) => (
  <div className={['indicator', locked ? '-error' : '-success'].join(' ')} />
);

Indicator.propTypes = {
  locked: PropTypes.bool
};

export default Indicator;
