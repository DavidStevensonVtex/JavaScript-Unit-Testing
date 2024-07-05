test.only.failing('failing test will pass', () => {
    expect(2 + 2).toBe(5);
})

test('another failing test which won\'t be run', () => {
    expect(2 + 2).toBe(5);
});

// Test Suites: 1 passed, 1 total
// Tests:       1 skipped, 1 passed, 2 total