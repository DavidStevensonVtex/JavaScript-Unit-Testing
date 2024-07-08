test("mockFn.mock.contexts", () => {
    const mockFn = jest.fn();
    const thisContext0 = { a: 123, b: "text" };
    const thisContext1 = { c: "text", d: 456 } ;
    const thisContext2 = { e: 789, f: "text" } ;

    const boundMockFn = mockFn.bind(thisContext0);
    boundMockFn('a', 'b');
    mockFn.call(thisContext1, 'a', 'b');
    mockFn.apply(thisContext2, ['a', 'b']);

    expect(mockFn.mock.contexts[0] === thisContext0).toBe(true);
    expect(mockFn.mock.contexts[1] === thisContext1).toBe(true);
    expect(mockFn.mock.contexts[2] === thisContext2).toBe(true);
});

// PASS  ./mockFn.mock.contexts.test.js
// √ mockFn.mock.contexts (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total