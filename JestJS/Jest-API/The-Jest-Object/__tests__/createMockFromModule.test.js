// jest.createMockFromModule(moduleName)

// Given the name of a module, use the automatic mocking system to generate a mocked version of the module for you.

// This is useful when you want to create a manual mock that extends the automatic mock's behavior:

const utils = jest.createMockFromModule('../utils');

utils.isAuthorized = jest.fn(secret => secret === 'not wizard');

test('implementation created by jest.createMockFromModule', () => {
  expect(jest.isMockFunction(utils.authorize)).toBe(true);
  expect(utils.isAuthorized('not wizard')).toBe(true);
});

// PASS  __tests__/createMockFromModule.test.js
// √ implementation created by jest.createMockFromModule (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total