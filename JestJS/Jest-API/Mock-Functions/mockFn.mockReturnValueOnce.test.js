// mockFn.mockReturnValueOnce(value)

// Shorthand for:

// jest.fn().mockImplementationOnce(() => value);

// Accepts a value that will be returned for one call to the mock function. 
// Can be chained so that successive calls to the mock function return different values. 
// When there are no more mockReturnValueOnce values to use, calls will return a 
// value specified by mockReturnValue.


test("mockFn.mockReturnValueOnce", () => {
    const mockFn = jest
        .fn()
        .mockReturnValue('default')
        .mockReturnValueOnce('first call')
        .mockReturnValueOnce('second call');

    expect(mockFn()).toBe('first call');
    expect(mockFn()).toBe('second call');
    expect(mockFn()).toBe('default');
    expect(mockFn()).toBe('default');
});

// PASS  ./mockFn.mockReturnValueOnce.test.js
// √ mockFn.mockReturnValueOnce (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total