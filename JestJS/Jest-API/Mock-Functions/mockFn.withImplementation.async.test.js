// mockFn.withImplementation(fn, callback)

// mockFn.withImplementation can be used regardless of whether or not the callback is asynchronous 
// (returns a thenable). If the callback is asynchronous a promise will be returned. Awaiting the 
// promise will await the callback and reset the implementation.

test('async test', async () => {
  const mock = jest.fn(() => 'outside callback');

  // We await this call since the callback is async
  await mock.withImplementation(
    () => 'inside callback',
    async () => {
      expect(mock()).toBe('inside callback');
    },
  );

  expect(mock()).toBe('outside callback');
});