// mockFn.mockImplementationOnce(fn)

// Accepts a function that will be used as an implementation of the mock for one call to the 
// mocked function. Can be chained so that multiple function calls produce different results.


test("mockFn.mockImplementationOnce(fn)", () => {
    const mockFn = jest.fn()
        .mockImplementationOnce(cb => cb(null, true))
        .mockImplementationOnce(cb => cb(null, false));

    mockFn((err, val) => expect(val).toBe(true)); // true
    mockFn((err, val) => expect(val).toBe(false)); // false
});

// PASS  ./mockFn.mockImplementationOnce.test.js
// √ mockFn.mockImplementationOnce(fn) (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total