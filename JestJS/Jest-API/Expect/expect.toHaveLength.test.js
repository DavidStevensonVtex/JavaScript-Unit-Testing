// .toHaveLength(number) matcher

// Use .toHaveLength to check that an object has a .length property and 
// it is set to a certain numeric value.

// This is especially useful for checking arrays or strings size.

test('.toHaveLength(number)', () => {
    expect([1, 2, 3]).toHaveLength(3);
    expect('abc').toHaveLength(3);
    expect('').not.toHaveLength(5);
});

PASS  ./expect.toHaveLength.test.js
√ .toHaveLength(number) (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total