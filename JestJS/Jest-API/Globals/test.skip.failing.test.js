test.skip.failing('failing test that will be skipped', () => {
    expect(2 + 2).toBe(5);
});

test('test that will succeed', () => {
    expect(2 + 2).toBe(4);
});

// Test Suites: 1 passed, 1 total
// Tests:       1 skipped, 1 passed, 2 total