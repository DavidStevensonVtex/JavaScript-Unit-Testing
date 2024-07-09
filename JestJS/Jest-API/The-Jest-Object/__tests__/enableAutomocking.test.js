// jest.enableAutomock()

// Enables automatic mocking in the module loader.

const utils = require('../utils');

console.log("enableAutomock");
jest.enableAutomock();

test('original implementation', () => {
  // now we have the mocked implementation,
  expect(utils.authorize._isMockFunction).toBeTruthy();
  expect(utils.isAuthorized._isMockFunction).toBeTruthy();
});

// PASS  ./enableAutomocking.test.js
// √ original implementation (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total