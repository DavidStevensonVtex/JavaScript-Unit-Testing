// mockFn.mock.lastCall

// An array containing the call arguments of the last call that was made to this mock function. 
// If the function was not called, it will return undefined.

// For example: A mock function f that has been called twice, with the arguments f('arg1', 'arg2'), 
// and then with the arguments f('arg3', 'arg4'), would have a mock.lastCall array that looks like this:

test("mockFn.mock.lastCall", () => {
    const mockFn = jest.fn();
    mockFn('arg3', 'arg4');

    console.log("mockFn.mock.lastCall", mockFn.mock.lastCall);

    expect(mockFn.mock.lastCall[0]).toBe('arg3');
    expect(mockFn.mock.lastCall[1]).toBe('arg4');
});

// PASS  ./mockFn.mock.lastCall.test.js
// √ mockFn.mock.lastCall (13 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total