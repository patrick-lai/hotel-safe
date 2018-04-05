import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// 'onPress' is used because we dont want to re-use a native event 'onClick'
const Button = ({ label, value, onPress }) => (
  <button
    data-test-id={label}
    className="btn"
    onClick={() => onPress && onPress(value)}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func
};

export default Button;
