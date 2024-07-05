// .rejects (using return)

// Use .rejects to unwrap the reason of a rejected promise so any other matcher can be chained. 
// If the promise is fulfilled the assertion fails.

// For example, this code tests that the promise rejects with reason 'octopus':

test('rejects to octopus', () => {
  // make sure to add a return statement
  return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
    'octopus',
  );
});

// PASS  ./expect.rejects.test.js
// √ rejects to octopus (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total