/***
 * Main features
 */

// Almost all of the lock logic is in app reducer
import app from '../src/reducers/app';

const defaultState = {
  _savedPin: [],
  pin: [],
  locked: false,
  status: null
};

describe('Lock safe behaviour', () => {
  test('PIN should be 4 digits', () => {
    const action = { type: 'SUBMIT_PIN' };

    const result_0 = app(defaultState, action);
    expect(result_0.status).toBe('INVALID');
    expect(result_0._savedPin).toEqual([]);

    const result_1 = app({ ...defaultState, pin: [1, 2, 3] }, action);
    expect(result_1.status).toBe('INVALID');
    expect(result_1._savedPin).toEqual([]);

    const result_2 = app({ ...defaultState, pin: [8, 8, 8, 8] }, action);
    expect(result_2.status).toBe(null);
    expect(result_2._savedPin).toEqual([8, 8, 8, 8]);
  });

  test('PIN should show each digit in display on key press with a limit of 4', () => {
    const action = { type: 'ENTER_DIGIT', digit: 8 };

    const result_0 = app({ ...defaultState, pin: [1, 2, 3] }, action);
    expect(result_0.pin).toEqual([1, 2, 3, 8]);

    const result_1 = app({ ...defaultState, pin: [1, 2, 3, 4] }, action);
    expect(result_1.pin).toEqual([1, 2, 3, 4]);
  });

  test('Enter button should store the PIN code IF the safe is not currently locked', () => {
    const action = { type: 'SUBMIT_PIN' };

    const result_0 = app(
      { ...defaultState, locked: true, pin: [8, 8, 8, 8] },
      action
    );
    expect(result_0._savedPin).toEqual([]);

    const result_1 = app(
      { ...defaultState, locked: false, pin: [8, 8, 8, 8] },
      action
    );
    expect(result_1._savedPin).toEqual([8, 8, 8, 8]);
  });

  test('If the safe is locked on enter, show an error message (eg. INVALID) in the display window', () => {
    const action = { type: 'SUBMIT_PIN' };

    const result_0 = app(
      { ...defaultState, locked: true, pin: [8, 8, 8, 8] },
      action
    );
    expect(result_0.status).toBe('INVALID');
  });

  // Not sure what this one means
  xtest('If safe is open and PIN is a valid 4 digit value, save value to state and use that to update lock indicator light', () => {});

  test('If safe is locked and PIN matches stored value, unlock and update indicator light and clear state value/display', () => {
    const action = { type: 'ENTER_DIGIT', digit: 8 };

    const result_0 = app(
      {
        ...defaultState,
        locked: true,
        _savedPin: [8, 8, 8, 8],
        pin: [8, 8, 8]
      },
      action
    );
    expect(result_0.locked).toBe(false);
    expect(result_0.pin).toEqual([]);
  });

  test('CLR should clear the current display', () => {
    const action = { type: 'CLEAR_PIN' };

    const result_0 = app(
      {
        ...defaultState,
        status: 'INVALID',
        pin: [8, 8, 8]
      },
      action
    );
    expect(result_0.status).toBe(null);
    expect(result_0.pin).toEqual([]);
  });
});
