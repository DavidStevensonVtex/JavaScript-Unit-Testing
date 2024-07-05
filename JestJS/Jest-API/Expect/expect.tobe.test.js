// .toBe(value) Matcher

// Use .toBe to compare primitive values or to check referential identity of object instances. 
// It calls Object.is to compare values, which is even better for testing than === strict 
// equality operator.

// For example, this code will validate some properties of the can object:

const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});

// Don't use .toBe with floating-point numbers. For example, due to rounding, in JavaScript 0.2 + 0.1 
// is not strictly equal to 0.3. If you have floating point numbers, try .toBeCloseTo instead.

// PASS  ./expect.tobe.test.js
// the can
//   √ has 12 ounces (1 ms)
//   √ has a sophisticated name

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total