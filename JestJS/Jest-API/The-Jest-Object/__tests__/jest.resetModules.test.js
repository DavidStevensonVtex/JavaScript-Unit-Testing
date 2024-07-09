// jest.resetModules()

// Resets the module registry - the cache of all required modules. This is useful to 
// isolate modules where local state might conflict between tests.

beforeEach(() => {
    jest.resetModules();
});

test('test for different modules', () => {
    const sum1 = require('../sum');
    jest.resetModules();
    const sum2 = require('../sum');
    expect(sum1 === sum2).toBe(false);
})

test('works', () => {
    const sum = require('../sum');
});

test('works too', () => {
    const sum = require('../sum');
    // sum is a different copy of the sum module from the previous test.
});

// √ test for different modules (9 ms)
// √ works
// √ works too (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total