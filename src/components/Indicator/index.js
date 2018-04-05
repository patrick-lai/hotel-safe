/***
 * An indicator can can show status by color
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Indicator = ({ status }) => {
  // Build the full classname
  const classNames = ['indicator'];
  switch (status) {
    case 'ERROR':
      classNames.push('-error');
      break;
    case 'SUCCESS':
      classNames.push('-success');
      break;
    default:
    // Do nothing
  }

  return <div className={classNames.join(' ')} />;
};

Indicator.propTypes = {
  status: PropTypes.string
};

export default Indicator;
