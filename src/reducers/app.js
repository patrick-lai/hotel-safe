/***
 * Holds information about the app (lock).
 */

// NOTE - Do not really understand part of the spec:
// If safe is open and PIN is a valid 4 digit value, save value to state and use that to update lock indicator light
// Does this mean it will just keep it in display and leave it open or lock it?

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
  const { _savedPin, pin, locked, status } = state;

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

      // If safe is locked and PIN matches stored value, unlock and update indicator light and clear state value/display
      if (locked && newPin.length === 4) {
        const matches = _.isEqual(_savedPin, newPin);
        mutation.locked = !matches;
        mutation.pin = [];

        mutation.locked
          ? toast.error('PIN mismatch')
          : toast.success('PIN matched');
      }

      return { ...state, ...mutation };

    case 'SUBMIT_PIN':
      // Do nothing if the pin is empty
      if (pin.length === 0) return state;
      if (locked) return { ...state, status: 'INVALID' };
      // Else set the pin if its opened
      toast.info('New PIN set');
      return { ...state, _savedPin: state.pin, pin: [], locked: true };

    case 'CLEAR_PIN':
      return { ...state, pin: [], status: null };
    default:
      return state;
  }
};
