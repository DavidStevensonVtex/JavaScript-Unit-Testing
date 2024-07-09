// jest.isMockFunction(fn)

// Determines if the given function is a mocked function.

const utils = require('../utils');

// console.log("enableAutomock");
jest.enableAutomock();

test('original implementation', () => {
  // now we have the mocked implementation,
  expect(utils.authorize._isMockFunction).toBeTruthy();
  expect(utils.isAuthorized._isMockFunction).toBeTruthy();
});

test('not a mocked function', () => {
    const notAMockedFunction = () => 42;

    expect(notAMockedFunction._isMockFunction).toBeFalsy();
});

// √ original implementation (2 ms)
// √ not a mocked function (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total