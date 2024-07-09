// jest.requireActual(moduleName)

// Returns the actual module instead of a mock, bypassing all checks on whether 
// the module should receive a mock implementation or not.

jest.mock('../myModule', () => {
    // Require the original module to not be mocked...
    const originalModule = jest.requireActual('../myModule');
  
    return {
      __esModule: true, // Use it when dealing with esModules
      ...originalModule,
      getRandom: jest.fn(() => 10),
    };
  });
  
  test('jest.requireActual test', () => {
    const getRandom = require('../myModule').getRandom;
    expect(getRandom()).toBe(10);
    // getRandom(); // Always returns 10
  });

//   PASS  __tests__/jest.requireActual.test.js
//   √ jest.requireActual test (124 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total