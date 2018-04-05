/***
 * Screen displaying the lock's status
 */

import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Screen = ({ display, status }) => {
  // Build the full classname
  const classNames = ['screen'];
  switch (status) {
    case 'INVALID':
      classNames.push('-error');
      break;
    default:
    // Do nothing
  }

  return (
    <div data-test-id="screen" className={classNames.join(' ')}>
      {display}
    </div>
  );
};

Screen.propTypes = {
  display: PropTypes.string,
  status: PropTypes.string
};

export default Screen;
