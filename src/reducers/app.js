/***
 * Holds information about the app (lock).
 */

const defaultState = {
  _savedPin: [],
  pin: [],
  status: 'LOCKED'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ENTER_DIGIT':
      return { ...state, pin: action.pin.concat(action.digit) };
    case 'SUBMIT_PIN':
      // Do some check
      return { ...state, status: 'LOCKED' };
    case 'CLEAR_PIN':
      return { ...state, pin: [] };
    case 'SET_PIN':
      return { ...state, _savedPin: action.pin };
    case 'REMOVE_PIN':
      return { ...state, _savedPin: [] };
    default:
      return state;
  }
};
