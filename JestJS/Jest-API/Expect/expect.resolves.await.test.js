// .resolves

// Since you are still testing promises, the test is still asynchronous. Hence, you will 
// need to tell Jest to wait by returning the unwrapped assertion.

// Alternatively, you can use async/await in combination with .resolves:

test('resolves to lemon', async () => {
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
});

// PASS  ./expect.resolves.test.js
// √ resolves to lemon (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total