// .toBeNaN()

// Use .toBeNaN when checking a value is NaN.

test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
  expect(1).not.toBeNaN();
});

// PASS  ./expect.toBeNaN.test.js
// √ passes when value is NaN (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total