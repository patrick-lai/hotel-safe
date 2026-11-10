/***
 * Holds information about the app (lock).
 */

import _ from 'lodash';
import { toast } from 'react-toastify';

const defaultState = {
  _savedPin: [],
  pin: [],
  locked: false,
  status: null
};

// TODO - proper error logging
const log = (...args) => console.error(...args);

export default (state = defaultState, action) => {
  const { _savedPin, pin, locked } = state;

  switch (action.type) {
    case 'ENTER_DIGIT':
      // Something went wrong.. reset the reducer
      if (isNaN(action.digit)) {
        log('Unexpected input, digit must be an integer');
        return defaultState;
      }

      // Do not allow adding more digits than 4
      if (pin.length === 4) return state;
      const newPin = pin.concat([action.digit]);

      // Update the pin and also reset status
      const mutation = { pin: newPin, status: null, locked };

      if (locked && newPin.length === 4) {
        const matches = _.isEqual(_savedPin, newPin);
        mutation.pin = [];

        if (matches) {
          mutation.locked = false;
          mutation._savedPin = [];
          mutation.status = null;
          toast.success('PIN matched');
        } else {
          mutation.locked = true;
          mutation.status = 'INVALID';
          toast.error('PIN mismatch');
        }
      }

      return { ...state, ...mutation };

    case 'SUBMIT_PIN':
      // Can only set pin if its 4 digits and opened
      if (locked || pin.length !== 4) return { ...state, status: 'INVALID' };
      // Else set the pin if its opened
      toast.info('New PIN set');
      return { ...state, _savedPin: state.pin, pin: [], locked: true };

    case 'CLEAR_PIN':
      return { ...state, pin: [], status: null };
    default:
      return state;
  }
};
