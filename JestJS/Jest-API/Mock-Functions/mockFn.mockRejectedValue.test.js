// mockFn.mockRejectedValue(value)

// Shorthand for:

// jest.fn().mockImplementation(() => Promise.reject(value));

// Useful to create async mock functions that will always reject:

test('async test', async () => {
    const asyncMock = jest
      .fn()
      .mockRejectedValue(new Error('Async error message'));


      expect(await asyncMock()).rejects.ToThrow("Async error message");
  });