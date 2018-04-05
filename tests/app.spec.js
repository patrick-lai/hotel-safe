/***
 * Main features
 */

describe('Lock safe behaviour', () => {
  test('PIN should be 4 digits', () => {});
  test('PIN should show each digit in display on key press with a limit of 4', () => {});
  test('Enter button should store the PIN code IF the safe is not currently locked', () => {});
  test('If the safe is locked on enter, show an error message (eg. INVALID) in the display window', () => {});
  test('If safe is open and PIN is a valid 4 digit value, save value to state and use that to update lock indicator light', () => {});
  test('If safe is locked and PIN matches stored value, unlock and update indicator light and clear state value/display', () => {});
  test('Currently open safe should display a green light, locked should display a red light', () => {});
  test('CLR should clear the current display', () => {});
});
