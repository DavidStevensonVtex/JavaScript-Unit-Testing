// mockFn.mockReturnValue(value)

// Shorthand for:

// jest.fn().mockImplementation(() => value);

// Accepts a value that will be returned whenever the mock function is called.

test("mockFn.mockReturnValue", () => {
    const mock = jest.fn();

    mock.mockReturnValue(42);
    expect(mock()).toBe(42);

    mock.mockReturnValue(43);
    expect(mock()).toBe(43);
});

// PASS  ./mockFn.mockReturnValue.test.js
// √ mockFn.mockReturnValue (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total