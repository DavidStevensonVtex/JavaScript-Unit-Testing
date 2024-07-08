// mockFn.mockRejectedValueOnce(value)

// Shorthand for:

// jest.fn().mockImplementationOnce(() => Promise.reject(value));

// Useful together with .mockResolvedValueOnce() or to reject with different exceptions over multiple async calls:

test('async test', async () => {
    const asyncMock = jest
      .fn()
      .mockResolvedValueOnce('first call')
      .mockRejectedValueOnce(new Error('Async error message'));
  
      expect(asyncMock()).resolves.toBe('first call');

      asyncMock().catch ( (error) => {
        expect(error.message).toBe("Async error message");
        console.log(error.message);
      });
  });

//   PASS  ./mockFn.mockRejectedValueOnce.test.js
//   √ async test (12 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total