// mockFn.withImplementation(fn, callback)

// Accepts a function which should be temporarily used as the implementation 
// of the mock while the callback is being executed.

test('test', () => {
    const mock = jest.fn(() => 'outside callback');
  
    mock.withImplementation(
      () => 'inside callback',
      () => {
        expect(mock()).toBe('inside callback');
      },
    );
  
    expect(mock()).toBe('outside callback');
  });

//   PASS  ./mockFn.withImplementation.test.js
//   √ test (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total