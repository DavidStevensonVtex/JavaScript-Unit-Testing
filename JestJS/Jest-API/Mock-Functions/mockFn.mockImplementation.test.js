// mockFn.mockImplementation(fn)

// Accepts a function that should be used as the implementation of the mock. The mock itself 
// will still record all calls that go into and instances that come from itself – the only 
// difference is that the implementation will also be executed when the mock is called.

// TIP: jest.fn(implementation) is a shorthand for jest.fn().mockImplementation(implementation).

test("mockFn.mockImplementation", () => {
    const mockFn = jest.fn(scalar => 42 + scalar);

    expect(mockFn(0)).toBe(42);
    expect(mockFn(1)).toBe(43);

    mockFn.mockImplementation(scalar => 36 + scalar);

    expect(mockFn(2)).toBe(38);
    expect(mockFn(3)).toBe(39);
});


// PASS  ./mockFn.mockImplementation.test.js
// √ mockFn.mockImplementation (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total