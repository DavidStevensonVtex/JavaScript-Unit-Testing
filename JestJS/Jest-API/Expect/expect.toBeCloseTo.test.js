// .toBeCloseTo(number, numDigits?)

// Use toBeCloseTo to compare floating point numbers for approximate equality.

// The optional numDigits argument limits the number of digits to check after the decimal point. 
// For the default value 2, the test criterion is Math.abs(expected - received) < 0.005 
// (that is, 10 ** -2 / 2).

// Intuitive equality comparisons often fail, because arithmetic on decimal (base 10) values often 
// have rounding errors in limited precision binary (base 2) representation. For example, this test fails:

test.failing('adding works sanely with decimals', () => {
  expect(0.2 + 0.1).toBe(0.3); // Fails!
});

// It fails because in JavaScript, 0.2 + 0.1 is actually 0.30000000000000004.

// For example, this test passes with a precision of 5 digits:

test('adding works sanely with decimals', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});

// Because floating point errors are the problem that toBeCloseTo solves, it does not support big integer values.

// PASS  ./expect.toBeCloseTo.test.js
// √ adding works sanely with decimals (2 ms)
// √ adding works sanely with decimals

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total