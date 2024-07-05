// .toEqual(value)

// Use .toEqual to compare recursively all properties of object instances (also known as "deep" equality). 
// It calls Object.is to compare primitive values, which is even better for testing than === strict equality operator.

// For example, .toEqual and .toBe behave differently in this test suite, so all the tests pass:

const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

describe('the La Croix cans on my desk', () => {
  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });
  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });
});

// PASS  ./expect.toEqual.test.js
// the La Croix cans on my desk
//   √ have all the same properties (2 ms)
//   √ are not the exact same can

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total