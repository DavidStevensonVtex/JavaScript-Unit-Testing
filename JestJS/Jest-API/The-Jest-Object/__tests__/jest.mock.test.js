// jest.mock(moduleName, factory, options)

// Mocks a module with an auto-mocked version when it is being required. 
// factory and options are optional. For example:

jest.mock('../banana');

const banana = require('../banana'); // banana will be explicitly mocked.

test('jest.mock test', () => {
    // banana(); // will return 'undefined' because the function is auto-mocked.
    expect(banana()).toBeUndefined();
});

// √ jest.mock test (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total