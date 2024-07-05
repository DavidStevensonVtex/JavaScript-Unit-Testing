// .rejects with await

// Since you are still testing promises, the test is still asynchronous. Hence, you will need to tell Jest to wait by returning the unwrapped assertion.

// Alternatively, you can use async/await in combination with .rejects.

test('rejects to octopus', async () => {
  await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
});

// PASS  ./expect.rejects.await.test.js
// √ rejects to octopus (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total