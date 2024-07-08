test("mockFn.mock.instances", () => {

    const mockFn = jest.fn();

    const a = new mockFn();
    const b = new mockFn();

    expect(mockFn.mock.instances[0] === a).toBe(true);
    expect(mockFn.mock.instances[1] === b).toBe(true);
});

// PASS  ./mockFn.mock.instances.test.js
// √ mockFn.mock.instances (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total