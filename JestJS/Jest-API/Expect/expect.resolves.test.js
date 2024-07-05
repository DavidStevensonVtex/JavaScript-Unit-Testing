// .resolves

// Use resolves to unwrap the value of a fulfilled promise so any other matcher can be chained. 
// If the promise is rejected the assertion fails.

// For example, this code tests that the promise resolves and that the resulting value is 'lemon':

test('resolves to lemon', () => {
  // make sure to add a return statement
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});

// PASS  ./expect.resolves.test.js
// √ resolves to lemon (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total