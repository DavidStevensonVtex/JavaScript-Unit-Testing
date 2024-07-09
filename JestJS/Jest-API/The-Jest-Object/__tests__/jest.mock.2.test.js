jest.mock('../moduleName', () => {
    return jest.fn(() => 42);
  });
  
  // This runs the function specified as second argument to `jest.mock`.
  const moduleName = require('../moduleName');

  test('explicit module factory that is being run instead of using Jests automocking feature', () => {
    expect(moduleName()).toBe(42);
  });

//   √ explicit module factory that is being run instead of using Jests automocking feature (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total