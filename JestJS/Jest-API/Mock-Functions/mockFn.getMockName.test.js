test('test mock names', () => {
    const plus42 = "plus 42" ;
    let myMock = jest.fn(x => x + 42) ;
    myMock.mockName(plus42);
    expect(myMock.getMockName()).toBe(plus42);
});

// PASS  ./mockFn.getMockName.test.js
// √ test mock names (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
