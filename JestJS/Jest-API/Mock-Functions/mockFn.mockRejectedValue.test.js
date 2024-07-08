// mockFn.mockRejectedValue(value)

// Shorthand for:

// jest.fn().mockImplementation(() => Promise.reject(value));

// Useful to create async mock functions that will always reject:

test('async test', async () => {
    const asyncMock = jest
      .fn()
      .mockRejectedValue(new Error('Async error message'));

      asyncMock().catch ( (error) => {
        // expect.assertions(1);
        expect(error.message).toBe("Async error message");
        console.log(error.message);
      });
  });