// mockFn.mockResolvedValue(value)

// Shorthand for:

// jest.fn().mockImplementation(() => Promise.resolve(value));

// Useful to mock async functions in async tests:

test("mockFn.mockResolvedValue", async () => {

  const asyncMock = jest.fn().mockResolvedValue(43);

  expect(await asyncMock()).toBe(43);
});


// PASS  ./mockFn.mockResolvedValue.test.js
// √ mockFn.mockResolvedValue (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total