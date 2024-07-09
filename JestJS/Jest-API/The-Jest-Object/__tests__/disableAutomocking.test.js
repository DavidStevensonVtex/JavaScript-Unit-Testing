// jest.disableAutomock()

// Disables automatic mocking in the module loader.

const utils = require('../utils');

jest.disableAutomock();

test('original implementation', () => {
  // now we have the original implementation,
  // even if we set the automocking in a jest configuration
  expect(utils.authorize()).toBe('token');
});

// PASS  __tests__/disableAutomocking.test.js
// √ original implementation (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total