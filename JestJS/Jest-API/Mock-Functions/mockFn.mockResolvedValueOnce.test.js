// mockFn.mockResolvedValueOnce(value)

// Shorthand for:

// jest.fn().mockImplementationOnce(() => Promise.resolve(value));

// Useful to resolve different values over multiple async calls:

test('async test', async () => {
    const asyncMock = jest
      .fn()
      .mockResolvedValue('default')
      .mockResolvedValueOnce('first call')
      .mockResolvedValueOnce('second call');

      expect(await asyncMock()).toBe('first call');
      expect(await asyncMock()).toBe('second call');
      expect(await asyncMock()).toBe('default');
      expect(await asyncMock()).toBe('default');
  });

//   PASS  ./mockFn.mockResolvedValueOnce.test.js
//   √ async test (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total